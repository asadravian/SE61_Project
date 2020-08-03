## bot challenge
* bot_challenge
  - utter_iamabot

<!-- ## muslim_greeting

* muslim_greet
  - utter_muslim_greeting -->

## muslim_goodbye

* muslim_goodbye
  - utter_muslim_goodbye

## muslim_thankyou

* muslim_thanks
  - utter_response_to_muslim_thankyou

<!-- ## greeting

* greet
  - utter_greet -->

## goodbye

* goodbye
  - utter_goodbye

## thankyou

* thanks
  - utter_response_to_thankyou
  
## interactive_story_1
* muslim_greet
    - utter_response_to_muslim_greeting
    - utter_ask_candidate_name
* telling_name{"name": "Shaharyar"}
    - slot{"name": "Shaharyar"}
    - utter_greet_with_human_name
    - utter_before_asking_candidate_gender
    - utter_ask_candidate_gender
* telling_gender{"gender": "male"}
    - slot{"gender": "male"}
    - utter_ask_city
* telling_city{"city": "Karachi"}
    - slot{"city": "Karachi"}
    - utter_brief_about_interview
    - utter_ask_to_begin_interview
* affirm
    - preliminary_interview_questions_form
    - utter_ask_Q1
* deny
    - utter_ask_Q3
* answer_the_question
    - utter_ask_Q4
* answer_the_question
    - utter_ask_Q7
* tomorrow
    - utter_ask_Q8
* competitive_salary_with_benefits
    - utter_ask_Q9
* affirm
    - utter_ask_Q10
* affirm
    - utter_ask_Q11
* answer_the_question
    - utter_ask_Q12
* telling_primary_programming_languages{"programming_lang": "C#"}
    - slot{"programming_lang": ["Java", "C", "C#"]}
    - utter_ask_Q13
* programming
    - utter_ask_Q14
* answer_the_question
    - utter_ask_Q15
* answer_the_question
    - utter_ask_Q16
* affirm
    - utter_ask_Q17
* affirm
    - utter_ask_Q18
* leader
    - utter_ask_Q19
* collaborative
    - utter_ask_Q20
* deny
    - utter_ask_Q21
* affirm
    - utter_ask_Q22
* affirm
    - utter_ask_Q23
* affirm
    - utter_ask_Q23_Extended
* telling_frameworks{"framework": "Django"}
    - slot{"framework": ["Spring", "Express", "Django"]}
    - utter_ask_Q24
* answer_the_question
    - utter_ask_Q25
* answer_the_question
    - utter_goodbye
    - utter_muslim_goodbye
	
## interactive_story_2
* greet
    - utter_greet_and_tell_bot_name
    - utter_ask_candidate_name
* telling_name{"name": "Shaharyar"}
    - slot{"name": "Shaharyar"}
    - utter_greet_with_human_name
    - utter_before_asking_candidate_gender
    - utter_ask_candidate_gender
* telling_gender{"gender": "male"}
    - slot{"gender": "male"}
    - utter_ask_city
* telling_city{"city": "Karachi"}
    - slot{"city": "Karachi"}
    - utter_brief_about_interview
    - utter_ask_to_begin_interview
* affirm
    - preliminary_interview_questions_form
    - utter_ask_Q1
* deny
    - utter_ask_Q3
* answer_the_question
    - utter_ask_Q4
* answer_the_question
    - utter_ask_Q7
* tomorrow
    - utter_ask_Q8
* competitive_salary_with_benefits
    - utter_ask_Q9
* affirm
    - utter_ask_Q10
* affirm
    - utter_ask_Q11
* answer_the_question
    - utter_ask_Q12
* telling_primary_programming_languages{"programming_lang": "C#"}
    - slot{"programming_lang": ["Java", "C", "C#"]}
    - utter_ask_Q13
* programming
    - utter_ask_Q14
* answer_the_question
    - utter_ask_Q15
* answer_the_question
    - utter_ask_Q16
* affirm
    - utter_ask_Q17
* affirm
    - utter_ask_Q18
* leader
    - utter_ask_Q19
* collaborative
    - utter_ask_Q20
* deny
    - utter_ask_Q21
* affirm
    - utter_ask_Q22
* affirm
    - utter_ask_Q23
* affirm
    - utter_ask_Q23_Extended
* telling_frameworks{"framework": "Django"}
    - slot{"framework": ["Spring", "Express", "Django"]}
    - utter_ask_Q24
* answer_the_question
    - utter_ask_Q25
* answer_the_question
    - utter_goodbye
* thanks

## interactive_story_3
* muslim_greet
    - utter_response_to_muslim_greeting
    - utter_ask_candidate_name
* telling_name{"name": "Shaharyar"}
    - slot{"name": "Shaharyar"}
    - utter_greet_with_human_name
    - utter_before_asking_candidate_gender
    - utter_ask_candidate_gender
* telling_gender{"gender": "male"}
    - slot{"gender": "male"}
    - utter_ask_city
* telling_city{"city": "Karachi"}
    - slot{"city": "Karachi"}
    - utter_brief_about_interview
    - utter_ask_to_begin_interview
* affirm
    - preliminary_interview_questions_form
    - utter_ask_Q1
* deny
    - utter_ask_Q3
* answer_the_question
    - utter_ask_Q4
* answer_the_question
    - utter_ask_Q7
* tomorrow
    - utter_ask_Q8
* competitive_salary_with_benefits
    - utter_ask_Q9
* affirm
    - utter_ask_Q10
* affirm
    - utter_ask_Q11
* answer_the_question
    - utter_ask_Q12
* telling_primary_programming_languages{"programming_lang": "C#"}
    - slot{"programming_lang": ["Java", "C", "C#"]}
    - utter_ask_Q13
* programming
    - utter_ask_Q14
* answer_the_question
    - utter_ask_Q15
* answer_the_question
    - utter_ask_Q16
* affirm
    - utter_ask_Q17
* affirm
    - utter_ask_Q18
* leader
    - utter_ask_Q19
* collaborative
    - utter_ask_Q20
* deny
    - utter_ask_Q21
* affirm
    - utter_ask_Q22
* affirm
    - utter_ask_Q23
* deny
    - utter_ask_Q24
* answer_the_question
    - utter_ask_Q25
* answer_the_question
    - utter_goodbye
    - utter_muslim_goodbye
	
## interactive_story_4
* muslim_greet
    - utter_response_to_muslim_greeting
    - utter_ask_candidate_name
* telling_name{"name": "Shaharyar"}
    - slot{"name": "Shaharyar"}
    - utter_greet_with_human_name
    - utter_before_asking_candidate_gender
    - utter_ask_candidate_gender
* telling_gender{"gender": "male"}
    - slot{"gender": "male"}
    - utter_ask_city
* telling_city{"city": "Karachi"}
    - slot{"city": "Karachi"}
    - utter_brief_about_interview
    - utter_ask_to_begin_interview
* affirm
    - preliminary_interview_questions_form
    - utter_ask_Q1
* affirm
    - utter_ask_Q2
* affirm
    - utter_ask_Q3
* answer_the_question
    - utter_ask_Q4
* answer_the_question
    - utter_ask_Q5_A
* answer_the_question
    - utter_ask_Q6
* answer_the_question
    - utter_ask_Q7
* tomorrow
    - utter_ask_Q8
* competitive_salary_with_benefits
    - utter_ask_Q9
* affirm
    - utter_ask_Q10
* affirm
    - utter_ask_Q11
* answer_the_question
    - utter_ask_Q12
* telling_primary_programming_languages{"programming_lang": "C#"}
    - slot{"programming_lang": ["Java", "C", "C#"]}
    - utter_ask_Q13
* programming
    - utter_ask_Q14
* answer_the_question
    - utter_ask_Q15
* answer_the_question
    - utter_ask_Q16
* affirm
    - utter_ask_Q17
* affirm
    - utter_ask_Q18
* leader
    - utter_ask_Q19
* collaborative
    - utter_ask_Q20
* deny
    - utter_ask_Q21
* affirm
    - utter_ask_Q22
* affirm
    - utter_ask_Q23
* deny
    - utter_ask_Q24
* answer_the_question
    - utter_ask_Q25
* answer_the_question
    - utter_goodbye
    - utter_muslim_goodbye

## interactive_story_5
* muslim_greet
    - utter_response_to_muslim_greeting
    - utter_ask_candidate_name
* telling_name{"name": "Shaharyar"}
    - slot{"name": "Shaharyar"}
    - utter_greet_with_human_name
    - utter_before_asking_candidate_gender
    - utter_ask_candidate_gender
* telling_gender{"gender": "male"}
    - slot{"gender": "male"}
    - utter_ask_city
* telling_city{"city": "Karachi"}
    - slot{"city": "Karachi"}
    - utter_brief_about_interview
    - utter_ask_to_begin_interview
* affirm
    - preliminary_interview_questions_form
    - utter_ask_Q1
* affirm
    - utter_ask_Q2
* deny
    - utter_ask_Q3
* answer_the_question
    - utter_ask_Q4
* answer_the_question
    - utter_ask_Q5_B
* answer_the_question
    - utter_ask_Q6
* answer_the_question
    - utter_ask_Q7
* tomorrow
    - utter_ask_Q8
* competitive_salary_with_benefits
    - utter_ask_Q9
* affirm
    - utter_ask_Q10
* affirm
    - utter_ask_Q11
* answer_the_question
    - utter_ask_Q12
* telling_primary_programming_languages{"programming_lang": "C#"}
    - slot{"programming_lang": ["Java", "C", "C#"]}
    - utter_ask_Q13
* programming
    - utter_ask_Q14
* answer_the_question
    - utter_ask_Q15
* answer_the_question
    - utter_ask_Q16
* affirm
    - utter_ask_Q17
* affirm
    - utter_ask_Q18
* leader
    - utter_ask_Q19
* collaborative
    - utter_ask_Q20
* deny
    - utter_ask_Q21
* affirm
    - utter_ask_Q22
* affirm
    - utter_ask_Q23
* deny
    - utter_ask_Q24
* answer_the_question
    - utter_ask_Q25
* answer_the_question
    - utter_goodbye
    - utter_muslim_goodbye

## interactive_story_6
* muslim_greet
    - utter_response_to_muslim_greeting
    - utter_ask_candidate_name
* telling_name{"name": "Shaharyar"}
    - slot{"name": "Shaharyar"}
    - utter_greet_with_human_name
    - utter_before_asking_candidate_gender
    - utter_ask_candidate_gender
* telling_gender{"gender": "male"}
    - slot{"gender": "male"}
    - utter_ask_city
* telling_city{"city": "Karachi"}
    - slot{"city": "Karachi"}
    - utter_brief_about_interview
    - utter_ask_to_begin_interview
* affirm
    - preliminary_interview_questions_form
    - utter_ask_Q1
* affirm
    - utter_ask_Q2
* deny
    - utter_ask_Q3
* answer_the_question
    - utter_ask_Q4
* answer_the_question
    - utter_ask_Q5_B
* answer_the_question
    - utter_ask_Q6
* answer_the_question
    - utter_ask_Q7
* tomorrow
    - utter_ask_Q8
* competitive_salary_with_benefits
    - utter_ask_Q9
* affirm
    - utter_ask_Q10
* affirm
    - utter_ask_Q11
* answer_the_question
    - utter_ask_Q12
* telling_primary_programming_languages{"programming_lang": "C#"}
    - slot{"programming_lang": ["Java", "C", "C#"]}
    - utter_ask_Q13
* programming
    - utter_ask_Q14
* answer_the_question
    - utter_ask_Q15
* answer_the_question
    - utter_ask_Q16
* affirm
    - utter_ask_Q17
* affirm
    - utter_ask_Q18
* leader
    - utter_ask_Q19
* collaborative
    - utter_ask_Q20
* deny
    - utter_ask_Q21
* affirm
    - utter_ask_Q22
* affirm
	- utter_ask_Q23
* affirm
    - utter_ask_Q23_Extended
* telling_frameworks{"framework": "Django"}
    - slot{"framework": ["Spring", "Express", "Django"]}
    - utter_ask_Q24
* answer_the_question
    - utter_ask_Q25
* answer_the_question
    - utter_goodbye
    - utter_muslim_goodbye
	
## interactive_story_4
* muslim_greet
    - utter_response_to_muslim_greeting
    - utter_ask_candidate_name
* telling_name{"name": "Shaharyar"}
    - slot{"name": "Shaharyar"}
    - utter_greet_with_human_name
    - utter_before_asking_candidate_gender
    - utter_ask_candidate_gender
* telling_gender{"gender": "male"}
    - slot{"gender": "male"}
    - utter_ask_city
* telling_city{"city": "Karachi"}
    - slot{"city": "Karachi"}
    - utter_brief_about_interview
    - utter_ask_to_begin_interview
* affirm
    - preliminary_interview_questions_form
    - utter_ask_Q1
* affirm
    - utter_ask_Q2
* affirm
    - utter_ask_Q3
* answer_the_question
    - utter_ask_Q4
* answer_the_question
    - utter_ask_Q5_A
* answer_the_question
    - utter_ask_Q6
* answer_the_question
    - utter_ask_Q7
* tomorrow
    - utter_ask_Q8
* competitive_salary_with_benefits
    - utter_ask_Q9
* affirm
    - utter_ask_Q10
* affirm
    - utter_ask_Q11
* answer_the_question
    - utter_ask_Q12
* telling_primary_programming_languages{"programming_lang": "C#"}
    - slot{"programming_lang": ["Java", "C", "C#"]}
    - utter_ask_Q13
* programming
    - utter_ask_Q14
* answer_the_question
    - utter_ask_Q15
* answer_the_question
    - utter_ask_Q16
* affirm
    - utter_ask_Q17
* affirm
    - utter_ask_Q18
* leader
    - utter_ask_Q19
* collaborative
    - utter_ask_Q20
* deny
    - utter_ask_Q21
* affirm
    - utter_ask_Q22
* affirm
	- utter_ask_Q23
* affirm
    - utter_ask_Q23_Extended
* telling_frameworks{"framework": "Django"}
    - slot{"framework": ["Spring", "Express", "Django"]}
    - utter_ask_Q24
* answer_the_question
    - utter_ask_Q25
* answer_the_question
    - utter_goodbye
    - utter_muslim_goodbye
