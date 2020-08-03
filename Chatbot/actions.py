# This files contains your custom actions which can be used to run
# custom Python code.
#
# See this guide on how to implement these action:
# https://rasa.com/docs/rasa/core/actions/#custom-actions/


# This is a simple example for a custom action which utters "Hello World!"

# from typing import Any, Text, Dict, List

# from rasa_sdk import Action, Tracker
# from rasa_sdk.executor import CollectingDispatcher


# class ActionHelloWorld(Action):

#     def name(self) -> Text:
#         return "action_hello_world"

#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

#         dispatcher.utter_message(text="Hello World!")

#         return []

from typing import Any, Text, Dict, List

from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet, FollowupAction
from rasa_sdk.forms import FormAction

# This is already available in rasa default so commented out. Just need to define utter_default to use this rasa default method
# class ActionDefaultFallback(Action):

#     def name(self) -> Text:
#         return "action_default_fallback"

#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

#         dispatcher.utter_message(template="utter_default")

#         return [UserUtteranceReverted]

# class ActionFacilitySearch(Action):

#     def name(self) -> Text:
#         return "action_facility_search"

#     def run(self, dispatcher: CollectingDispatcher,
#             tracker: Tracker,
#             domain: Dict[Text, Any]) -> List[Dict[Text, Any]]:

#         facility = tracker.get_slot("facility_type")
#         address = "300 Hyde St, San Francisco"
#         dispatcher.utter_message("Here is the address of the {}:{}".format(facility, address))

#         return [SlotSet("address", address)]

class PreliminaryInterviewQuestionsForm(FormAction):
    """Custom form action to fill all slots required to assess the potential
    candidates suitability up to the recruiting organizations requirements"""

    def name(self) -> Text:
        """Unique identifier of the form"""

        return "preliminary_interview_questions_form"

    @staticmethod
    def required_slots(tracker: Tracker) -> List[Text]:
        """A list of required slots that the form has to fill"""

        return ["Q1", "Q2", "Q3", "Q4", "Q5_A", "Q5_B", "Q6", "Q7", "Q8", "Q9", "Q10", "Q11", "Q12", "Q13", "Q14", "Q15", "Q16", "Q17", "Q18", "Q19", "Q20", "Q21", "Q22", "Q23", "Q23_Extended", "Q24", "Q25"]            
                                  
                           
    # def slot_mappings(self) -> Dict[Text, Any]:
    # # type: () -> Dict[Text: Union[Dict, List[Dict]]]
    # """A dictionary to map required slots to
    # - an extracted entity
    # - intent: value pairs
    # - a whole message or a list of them, where a first 
    #                              match will be picked"""

    #     return {"facility_type": self.from_entity(entity="facility_type",
    #                                               intent=["inform",
    #                                                       "search_provider"]),
    #             "location": self.from_entity(entity="location",
    #                                          intent=["inform",
    #                                                  "search_provider"])}
    
    def slot_mappings(self):
    

        return {
                "Q1": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q2": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q3":               
                                    [
                                        self.from_text()
                                    ],
                "Q4":               
                                    [
                                        self.from_text()
                                    ],
                "Q5_A":               
                                    [
                                        self.from_text()
                                    ],
                "Q5_B":             
                                    [
                                        self.from_text()
                                    ],
                "Q6":               
                                    [
                                        self.from_text()
                                    ],
                "Q7": 
                                    [
                                        self.from_intent(intent='tomorrow', value="tomorrow"),
                                        self.from_intent(intent='this_week', value="this week"),
                                        self.from_intent(intent='next_week', value="next week"),
                                        self.from_intent(intent='this_month', value="this month"),
                                        self.from_intent(intent='next_month', value="next month"),
                                        self.from_intent(intent='next_year', value="next year"),
                                        self.from_intent(intent='after_graduation', value="after graduation")
                                    ],
                "Q8": 
                                    [
                                        self.from_intent(intent='competitive_salary_with_benefits', value="competitive salary with benefits"),
                                        self.from_intent(intent='competitive_salary', value="competitive salary"),
                                        self.from_intent(intent='average_salary', value="average salary"),
                                        self.from_intent(intent='low_salary', value="low salary")
                                    ],
                "Q9": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q10": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q11":              
                                    [
                                        self.from_text()
                                    ],
                "Q12":              
                                    [
                                        self.from_entity(entity="programming_lang", intent=["telling_primary_programming_languages"])
                                    ],
                "Q13": 
                                    [
                                        self.from_intent(intent='programming', value="programming"),
                                        self.from_intent(intent='non-programming', value="non-Programming")
                                    ],
                "Q14":              
                                    [
                                        self.from_text()
                                    ],
                "Q15":              
                                    [
                                        self.from_text()
                                    ],
                "Q16": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q17": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q18": 
                                    [
                                        self.from_intent(intent='leader', value="leader"),
                                        self.from_intent(intent='follower', value="follower")
                                    ],
                "Q19": 
                                    [
                                        self.from_intent(intent='collaborative', value="collaborative"),
                                        self.from_intent(intent='independent', value="independent")
                                    ],
                "Q20": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q21": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q22": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q23": 
                                    [
                                        self.from_intent(intent='affirm', value=True),
                                        self.from_intent(intent='deny', value=False)
                                    ],
                "Q23_Extended":     
                                    [
                                        self.from_entity(entity="framework", intent=["telling_frameworks"])
                                    ],
                "Q24":             
                                    [
                                        self.from_text()
                                    ],
                "Q25":             
                                    [
                                        self.from_text()
                                    ]
            }

    def submit(self,
               dispatcher: CollectingDispatcher,
               tracker: Tracker,
               domain: Dict[Text, Any]
               ) -> List[Dict]:
        """Define what the form has to do after all required slots are filled. i.e.
        Once required slots are filled, print buttons for found facilities"""

        Q1 = tracker.get_slot('Q1')
        Q2 = tracker.get_slot('Q2')
        Q3 = tracker.get_slot('Q3')
        Q4 = tracker.get_slot('Q4')
        Q5_A = tracker.get_slot('Q5_A')
        Q5_B = tracker.get_slot('Q5_B')
        Q6 = tracker.get_slot('Q6')
        Q7 = tracker.get_slot('Q7')
        Q8 = tracker.get_slot('Q8')
        Q9 = tracker.get_slot('Q9')
        Q10 = tracker.get_slot('Q10')
        Q11 = tracker.get_slot('Q11')
        Q12 = tracker.get_slot('Q12')
        Q13 = tracker.get_slot('Q13')
        Q14 = tracker.get_slot('Q14')
        Q15 = tracker.get_slot('Q15')
        Q16 = tracker.get_slot('Q16')
        Q17 = tracker.get_slot('Q17')
        Q18 = tracker.get_slot('Q18')
        Q19 = tracker.get_slot('Q19')
        Q20 = tracker.get_slot('Q20')
        Q21 = tracker.get_slot('Q21')
        Q22 = tracker.get_slot('Q22')
        Q23 = tracker.get_slot('Q23')
        Q23_Extended = tracker.get_slot('Q23_Extended')
        Q24 = tracker.get_slot('Q24')
        Q25 = tracker.get_slot('Q25')

        # import re
        # extracted_cgpa = re.findall(r"\d*\.\d+|\d+", "Man! My worst gpa was 1.56")
        # print(extracted_cgpa)
        # Output: ['1.56']

        import re
        # extract the high GPA
        # Q14 -> question for high gpa
        extracted_high_gpa_list = re.findall(r"\d*\.\d+|\d+", Q14)
        Q14 = extracted_high_gpa_list[0]
        # extract the low GPA
        # Q15 -> question for low gpa
        extracted_low_gpa_list = re.findall(r"\d*\.\d+|\d+", Q15)
        Q15 = extracted_low_gpa_list[0]

        # dispatcher.utter_message("MSG - DEBUG ONLY [To check where lies the problem, if any]. Answers appearing in the order questions were asked. Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}, Q: {}."
        # .format(Q1, Q2, Q3, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q23, Q24, Q25, Q26))

        dispatcher.utter_message("MSG - DEBUG ONLY [To check where lies the problem, if any].\nAnswers appearing in the order questions were asked.\n- Q1: {}\n- Q2: {}\n- Q3: {}\n- Q4: {}\n- Q5_A: {}\n- Q5_B: {}\n- Q6: {}\n- Q7: {}\n- Q8: {}\n- Q9: {}\n- Q10: {}\n- Q11: {}\n- Q12: {}\n- Q13: {}\n- Q14: {}\n- Q15: {}\n- Q16: {}\n- Q17: {}\n- Q18: {}\n- Q19: {}\n- Q20: {}\n- Q21: {}\n- Q22: {}\n- Q23: {}\n- Q23_Extended: {}\n- Q24: {}\n- Q25: {}."
        .format(Q1, Q2, Q3, Q4, Q5_A, Q5_B, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20, Q21, Q22, Q23, Q23_Extended, Q24, Q25))
        # dispatcher.utter_message(template="utter_slots_values") # it uses the utterrance "utter_slot_values" in domain yaml file but we need to return the extracted gpa that I didn't so switched back to upper approach!
        return []


# class FacilityForm(FormAction):
#     """Custom form action to fill all slots required to find specific type
#     of healthcare facilities in a certain city or zip code."""

#     def name(self) -> Text:
#         """Unique identifier of the form"""

#         return "facility_form"

#     @staticmethod
#     def required_slots(tracker: Tracker) -> List[Text]:
#         """A list of required slots that the form has to fill"""

#         return ["facility_type", "location"]

#     def slot_mappings(self) -> Dict[Text, Any]:
#         return {"facility_type": self.from_entity(entity="facility_type",
#                                                   intent=["inform",
#                                                           "search_provider"]),
#                 "location": self.from_entity(entity="location",
#                                              intent=["inform",
#                                                      "search_provider"])}

#     def submit(self,
#                dispatcher: CollectingDispatcher,
#                tracker: Tracker,
#                domain: Dict[Text, Any]
#                ) -> List[Dict]:
#         """Once required slots are filled, print buttons for found facilities"""

#         location = tracker.get_slot('location')
#         facility_type = tracker.get_slot('facility_type')

#         results = _find_facilities(location, facility_type)
#         button_name = _resolve_name(FACILITY_TYPES, facility_type)
#         if len(results) == 0:
#             dispatcher.utter_message(
#                 "Sorry, we could not find a {} in {}.".format(button_name,
#                                                               location.title()))
#             return []

#         buttons = []
#         # limit number of results to 3 for clear presentation purposes
#         for r in results[:3]:
#             if facility_type == FACILITY_TYPES["hospital"]["resource"]:
#                 facility_id = r.get("provider_id")
#                 name = r["hospital_name"]
#             elif facility_type == FACILITY_TYPES["nursing_home"]["resource"]:
#                 facility_id = r["federal_provider_number"]
#                 name = r["provider_name"]
#             else:
#                 facility_id = r["provider_number"]
#                 name = r["provider_name"]

#             payload = "/inform{\"facility_id\":\"" + facility_id + "\"}"
#             buttons.append(
#                 {"title": "{}".format(name.title()), "payload": payload})

#         if len(buttons) == 1:
#             message = "Here is a {} near you:".format(button_name)
#         else:
#             if button_name == "home health agency":
#                 button_name = "home health agencie"
#             message = "Here are {} {}s near you:".format(len(buttons),
#                                                          button_name)

#         # TODO: update rasa core version for configurable `button_type`
#         dispatcher.utter_button_message(message, buttons)

#         return []

