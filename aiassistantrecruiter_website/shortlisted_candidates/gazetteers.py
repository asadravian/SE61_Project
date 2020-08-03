import os
from django.conf import settings

def get_candidate_name(resume_text): 
    
    # module_dir = os.path.dirname(__file__)  
    # file_path = os.path.join(module_dir, 'data.txt')   #full path to text.
    # data_file = open(file_path , 'r')       
    # data = data_file.read()
    
    pakistani_names = open(os.path.join(settings.BASE_DIR, 'pakistani_names.txt'), 'r')
    pk_names = [line.rstrip() for line in pakistani_names.readlines()]
    
    resume = resume_text
    lowercase_resume = ""

    for each_word in resume:
        lowercase_resume += each_word.lower()

    for n in pk_names:
        if n.lower() in lowercase_resume:
            return n
    return "Not Found"
    


def get_candidate_city(resume_text):
    cities = ['Islamabad','Attock','Bahawalpur','Burewala','Chakwal','Chiniot','Faisalabad','Gujar Khan','Gujranwala','Gujrat','Jhang','Jhelum','Kallar Syedan','Kasur','Kharian','Lahore','Mianwali','Multan','Murree','RahimYarKhan','Rawalpindi','Sadiqabad','Sahiwal','Sargodha','Sheikhupura','Sialkot','Taxila','Toba Tek Singh','Badin','Hyderabad','Jacobabad','Karachi','Khairpur','Larkana','Mirpur Khas','Nawabshah','Sukkur','Thatta','Abbottabad','Bannu','Battagram','Chitral','Charsadda','D.I.Khan','Haripur','Kohat','Mansehra','Mardan','Nowshera','Peshawar','Swat','Swabi','Timergara','Tank','Chaman','Gwadar','Khuzdar','Quetta','Ziarat','Bagh','Bhimber','Kotli','Mirpur','Muzaffarabad','Rawalakot','Gilgit','Skardu']
    
    resume = resume_text
    lowercase_resume = ""

    for each_word in resume:
        lowercase_resume += each_word.lower()

    for c in cities:
        if c.lower() in lowercase_resume:
            return c
    return "Not Found"
    
def get_candidate_university(resume_text):
    
    university_names = open(os.path.join(settings.BASE_DIR, 'pakistani_universities.txt'), 'r')
    pk_university_names = [line.rstrip() for line in university_names.readlines()]

    resume = resume_text
    lowercase_resume = ""

    for each_word in resume:
        lowercase_resume += each_word.lower()

    for u in pk_university_names:
        if lowercase_resume.find(u.lower())!=-1:
            return u
    return "Not Found"
    
    