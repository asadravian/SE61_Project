import {
  GET_JOB_DESCRIPTION,
  DELETE_JOB_DESCRIPTION,
  ADD_JOB_DESCRIPTION,
} from "./types";

import { createMessage } from "./messagesActions";

import axios from "axios";

import { tokenConfig } from "./authActions";

export const getJobDescription = () => (dispatch, getState) => {
  axios
    .get("/api/job_description/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_JOB_DESCRIPTION,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteJobDescription = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/job_description/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_JOB_DESCRIPTION,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// now we will pass the owner id with these as well
export const addJobDescription = (
  skillset,
  institution,
  education_background,
  education_level,
  experience,
  certificates,
  age_requirement,
  held_position,
  education_gravity,
  experience_gravity,
  skillset_gravity
) => (dispatch, getState) => {
  // request body(stringified) turning it to JSON
  const job_description_body = JSON.stringify({
    relevant_skillset: skillset,
    preferred_institution: institution,
    education_background: education_background,
    required_education_level: education_level,
    relevant_experience: experience,
    relevant_professional_certifications: certificates,
    age_requirement: age_requirement,
    held_position: held_position,
    education_gravity: education_gravity,
    experience_gravity: experience_gravity,
    skillset_gravity: skillset_gravity,
  });

  axios
    .post("/api/job_description/", job_description_body, tokenConfig(getState))
    .then(
      (response) => {
        dispatch(
          createMessage({
            addJobPosting:
              "Job Posting Successful. Added to Pending Job Positions",
          })
        );
        dispatch({
          type: ADD_JOB_DESCRIPTION,
          payload: response.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
};
