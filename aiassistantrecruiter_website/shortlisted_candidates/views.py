from twilio.rest import Client
from django.shortcuts import render

# Create your views here.
import spacy
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import os
import string
import time
from shortlisted_candidates.functions import get_pdf_extractor, get_docx_extractor
from shortlisted_candidates.gazetteers import get_candidate_name, get_candidate_city, get_candidate_university

# re for extraction of phone numbers and email of candidates
import re

from django.http import HttpResponse
# below the parser class is imported
from pyresparser import ResumeParser
import math


# Respond to a post request with data(file names)
from django.views.decorators.csrf import csrf_exempt

progress = 0


def get_progress(request):
    if(request.method == 'GET'):
        return HttpResponse(progress)
    else:
        return HttpResponse(-1)


@csrf_exempt
def send_whatsapp_msg(request):
    # Download the helper library from https://www.twilio.com/docs/python/install
    import os
    from twilio.rest import Client

    if(request.method == 'POST'):
        # Your Account Sid and Auth Token from twilio.com/console
        # DANGER! This is insecure. See http://twil.io/secure
        # account_sid = 'ACe26f5ce8b3fcc95af24ebf63d3ba8d0c'
        # auth_token = 'your_auth_token'
        # client = Client(account_sid, auth_token)
        account_sid = os.environ.get('TWILIO_ACCOUNT_SID')
        auth_token = os.environ.get('TWILIO_AUTH_TOKEN')
        client = Client(account_sid, auth_token)
        from_whatsapp_number = 'whatsapp:+14155238886'
        to_whatsapp_number = 'whatsapp:' + os.environ.get('MY_PHONE_NUMBER')

        client.messages.create(
            body='AI Assistant Recruiter invites you to the preliminary interview held for the "associate software engineering" position. The time and interview details will be notified shortly. All the best!',
            from_=from_whatsapp_number,
            to=to_whatsapp_number
        )
        return HttpResponse("Sent Successfully")
    else:
        return HttpResponse("Invalid Request Method")

    # message = client.messages.create(
    #     body='Hello there!',
    #     from_='whatsapp:+14155238886',
    #     to='whatsapp:+15005550006'
    # )

    # print(message.sid)


@csrf_exempt
def send_sms(request):
    import os
    from twilio.rest import Client

    if(request.method == 'POST'):
        account_sid = os.environ.get('TWILIO_ACCOUNT_SID')
        auth_token = os.environ.get('TWILIO_AUTH_TOKEN')
        client = Client(account_sid, auth_token)
        from_US_mobile_number = '+12058963222'
        to_mobile_number = os.environ.get('MY_PHONE_NUMBER')

        # message = client.messages.create(
        #                           body='Hi there!',
        #                           from_='+15017122661',
        #                           to='+15558675310'
        #                       )

        # print(message.sid)

        client.messages.create(
            body='AI Assistant Recruiter invites you to the preliminary interview held for the "associate software engineering" position. The time and interview details will be notified shortly. All the best!',
            from_=from_US_mobile_number,
            to=to_mobile_number
        )
        return HttpResponse("Sent Successfully")
    else:
        return HttpResponse("Invalid Request Method")


@csrf_exempt
def send_email(request):
    from django.core.mail import send_mail
    from django.conf import settings

    if(request.method == 'POST'):
        subject = "Prepare for Job Interview"
        message = "Congratulations! You have been shortlisted for the job interview. Shortly, you will be notified about the interview time and venue. This is an automated message."
        email_from = settings.EMAIL_HOST_USER
        recipient_list = ["msk13599@gmail.com", ]
        send_mail(subject, message, email_from,
                  recipient_list, fail_silently=False)
        return HttpResponse("Sent Successfully")
    else:
        return HttpResponse("Invalid Request Method")


@csrf_exempt
def send_custom_email(request):
    from django.core.mail import send_mail
    from django.conf import settings

    if(request.method == 'POST'):
        import json
        data_passed_here_to_request = json.loads(request.body)

        # "to" (i.e. recipient_email) argument must be a list or tuple
        recipient_email = []
        recipient_email.append(data_passed_here_to_request['recipient_email'])
        email_subject = data_passed_here_to_request['email_subject']
        email_body = data_passed_here_to_request['email_body']

        email_from = settings.EMAIL_HOST_USER
        # recipient_list = ['msk13599@gmail.com', ]
        # send_mail(subject, message, email_from,
        #           recipient_list, fail_silently=False)
        send_mail(email_subject, email_body, email_from,
                  recipient_email, fail_silently=False)
        return HttpResponse("Sent Successfully")
    else:
        return HttpResponse("Invalid Request Method")


@csrf_exempt
def index(request):
    if request.method == 'POST':
        global progress
        similarities = []
        text = ''
        # test data below,
        criteria = {
            'Technical Skills': 'plotly matplotlib java c c++ information extraction predictive modeling tensorflow keras opencv regression',
            'Soft Skills': 'communication creative teamwork teamplayer problem solving solver critical thinking eager learner',
            'Institutions': 'fast'}
        candidate_name = ""
        candidate_city = ""
        candidate_university = ""
        extracted_phone_number = ""
        extracted_email_address = ""
        total_files = 0
        files_done = 0
        percentage = 0

        # start time
        start_time = time.time()

        # loading spacy model
        nlp = spacy.load('en_core_web_sm')

        # forming a list of all punctuation
        punct_ = string.punctuation
        punct_ = list(punct_)

        # get current path for files app
        import files
        path = os.path.dirname(files.__file__)

        # current path for files directory in files django app
        path = os.path.join(path, 'files')

        import json
        data_passed_here_to_request = json.loads(request.body)
        job_id = data_passed_here_to_request['job_posting_id']

        from shortlisted_candidates.models import ShortlistedCandidates

        from files.models import File
        from job_posting.models import JobDescription, JobPosting

        associated_files = []
        education_gravity = -1
        experience_gravity = -1
        skillset_gravity = -1

        relevant_skillset = "here will come the skills"
        preferred_institution = "here will come the institution"

        id = job_id
        for file_query in File.objects.raw('SELECT id, file_name FROM files_file WHERE job_posting_reference_id = %s', [id]):
            associated_files.append(file_query.file_name)

        for file_query_2 in File.objects.raw('SELECT id, count(id) AS total_files FROM files_file WHERE job_posting_reference_id = %s', [id]):
            total_files = file_query_2.total_files

        for description_query in JobDescription.objects.raw('SELECT id, relevant_skillset, preferred_institution, education_gravity, experience_gravity, skillset_gravity FROM job_posting_jobdescription WHERE job_posting_reference_id = %s', [id]):
            education_gravity = description_query.education_gravity
            experience_gravity = description_query.experience_gravity
            skillset_gravity = description_query.skillset_gravity
            relevant_skillset = description_query.relevant_skillset
            preferred_institution = description_query.preferred_institution

        # changing decimal field to float field because cannot multiply decimal no. [as saved in DB] with float no. [similarity as in fromula]
        education_gravity = float(education_gravity)
        skillset_gravity = float(skillset_gravity)
        experience_gravity = float(experience_gravity)

        # get file names in files directory [MSK: Here, we are getting all files from the Folder]
        # Here we will contact database to retrieve only those files which are associated with this job posting_id
        # entries = os.listdir(path) #gives the list of all files inside the directory

        entries = associated_files  # file names from database are given here

        # looping through the files

        for entry in entries:
            # my_files.append(entry) IT DOES NOT DO ANYTHING

            file_path = path + '\\' + entry

            # data = ResumeParser(file_path).get_extracted_data()
            # return HttpResponse(data.get("name"))
            # return HttpResponse(data.get("email"))
            # return HttpResponse(data.get("skills"))
            # return HttpResponse(data.get("degree"))

            filename = entry.split('.')
            if filename[1] == 'docx':
                text = get_docx_extractor(file_path)
            elif filename[1] == 'pdf':
                text = get_pdf_extractor(file_path)
            else:
                print('file format not supported')

            # find name, city, and university
            candidate_name = get_candidate_name(text)
            candidate_city = get_candidate_city(text)
            candidate_university = get_candidate_university(text)

            # tokenization by spacy
            resume_spacy_tokens = nlp(text)

            # import re
            # extract current candiate's email address
            pattern = "[\w]+[\.[\w]+]*@[\w]+[\.[\w]+]*\.\w{2,3}"  # shaharyar's
            mails = re.findall(pattern, text)

            if mails == None:
                extracted_email_address = "No Email Provided"
            elif (len(mails) == 1):
                extracted_email_address = mails[0]

            # extract current candiate's phone number
            pattern = "(\d{4}-\d{7}|\d{4}\s*\d{7})"  # shaharyar's v1.1
            phone = re.findall(pattern, text)
            if phone == None:
                print("No Phone Provided")
            elif (len(phone) == 1):
                extracted_phone_number = phone[0]
            elif (len(phone) == 2):
                extracted_phone_number = phone[0]+", "+phone[1]

            # copying those tokens into a list for further preprocessing
            resume_list_tokens = []
            for token in resume_spacy_tokens:
                resume_list_tokens.append(token.text)

            # removing punctuation from token list
            for element in resume_list_tokens:
                if element in punct_:
                    resume_list_tokens.remove(element)
                else:
                    continue

            # removing \n from tokens
            for element in resume_list_tokens:
                if element == '\n':
                    resume_list_tokens.remove(element)
                else:
                    continue

            # removing \n\n from tokens
            for element in resume_list_tokens:
                if element == '\n\n':
                    resume_list_tokens.remove(element)
                else:
                    continue

            # converting tokens to lower case
            list_ = resume_list_tokens.copy()
            resume_list_tokens.clear()
            for element in list_:
                resume_list_tokens.append(element.lower())

            # removing anything which is not a word
            for element in resume_list_tokens:
                if element.isalpha() == False:
                    resume_list_tokens.remove(element)
                else:
                    continue

            # converting the list of tokens into a string to feed it to the count vectorizer
            resume_string = ' '.join(resume_list_tokens)

            # instantiating the vectorizer
            count = CountVectorizer()

            # creating the corpus of (this is very redundant)
            corpus = []
            corpus.append(resume_string)
            # corpus.append(criteria['Technical Skills'])
            corpus.append(relevant_skillset)
            corpus.append(criteria['Soft Skills'])
            corpus.append(preferred_institution)
            # corpus.append(criteria['Institutions'])

            x = count.fit_transform(corpus)

            resume_vector = x.toarray()[0]
            technical_skills_vector = x.toarray()[1]
            soft_skills_vector = x.toarray()[2]
            institutions_vector = x.toarray()[3]

            row_column = resume_vector.shape[0]

            resume_vector = resume_vector.reshape(1, row_column)
            technical_skills_vector = technical_skills_vector.reshape(
                1, row_column)
            soft_skills_vector = soft_skills_vector.reshape(1, row_column)
            institutions_vector = institutions_vector.reshape(1, row_column)

            # this function returns a 2D numpy array and in it resides the similarity index
            technical_similarity = cosine_similarity(
                resume_vector, technical_skills_vector)
            # so accessing the zeroth element like array[0, 0] to retrieve the similarity index
            # return HttpResponse(similarity[0, 0]) [I have checked it] so now using it below
            soft_similarity = cosine_similarity(
                resume_vector, soft_skills_vector)
            institution_similarity = cosine_similarity(
                resume_vector, institutions_vector)

            total_similarity_calculated = 100 * \
                (skillset_gravity*technical_similarity[0, 0]+experience_gravity *
                 soft_similarity[0, 0]+7*institution_similarity[0, 0])

            # The similarity comes in floating points so taking ceil
            total_similarity_calculated = math.ceil(
                total_similarity_calculated)
            similarities.append((entry, total_similarity_calculated))

            # ------->>DOWN>> storing just the file_name[i.e entry] instead of file_path in resume path beacause the react app has been programmed like that to open the CVs in frontend app
            data = ResumeParser(file_path).get_extracted_data()
            if candidate_name == "":
                candidate_name = data.get("name")

            ShortlistedCandidates.objects.create(candidate_name=candidate_name, candidate_email=extracted_email_address, candidate_phone=extracted_phone_number,
                                                 candidate_institute=candidate_university, candidate_degree=data.get("degree"), candidate_match=total_similarity_calculated,
                                                 candidate_location=candidate_city, candidate_resume_path=entry, job_posting_reference=JobPosting.objects.get(pk=id))
            # ------->>UP>> storing just the file_name[i.e entry] instead of file_path in resume path beacause the react app has been programmed like that to open the CVs in frontend app

            # candidate_institute =data.get("college_name") does not work because it uses list

            # similarities.append((technical_similarity[0, 0]*100, entry)) #similarity is multiplied by 100 to convert it into percentage [as cosine similarity range is 0 - 1]

            # # Function to sort the list by second item of tuple
            # def Sort_Tuple(tup):

            #     # reverse = None (Sorts in Ascending order)
            #     # key is set to sort using second element of
            #     # sublist lambda has been used
            #     return(sorted(tup, key = lambda x: x[1]))
            time_ = time.time() - start_time
            # When 1 file is done with we should update the progress by contacting the database
            # update screening_ideal_fit_progress
            # Calculate Percentage
            files_done += 1
            percentage = (files_done/total_files)*100
            percentage = math.ceil(percentage)
            progress = percentage  # assigning percentage to global variable for progress bar
            # Import Django model class
            from job_posting.models import JobPosting

            # Get the object
            current_job_post = JobPosting.objects.get(pk=id)
            # Update the screening_ideal_fit_progress value
            current_job_post.screening_ideal_fit_progress = percentage
            # Call save() with the update_fields arg and a list of record fields to update selectively
            current_job_post.save(
                update_fields=['screening_ideal_fit_progress'])

        # Sorting the list which has tuples inside
        # Sorting based on 1st element
        # Descending Order [reverse=True] 5 4 3 2 1
        # x[0] for based on 1st, x[1] for based on 2nd and so on
        sorted_similarities = sorted(
            similarities, key=lambda x: x[1], reverse=True)

        return HttpResponse(sorted_similarities)
    else:
        return HttpResponse('App:Shortlisted_Candidates>Views: [ERROR: Something Affected AI Algorithm Process]')
        # this is from where the back-end will process our request and give the potential candidates [response] to the user because the : localhost:8000/ai_algorithm_running url will serve the response for our request from the frontend
