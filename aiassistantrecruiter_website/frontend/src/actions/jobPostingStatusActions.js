import {
  GET_JOB_POSTING_STATUS,
  MODIFY_JOB_POSTING_STATUS,
  ADD_JOB_POSTING_STATUS,
  DELETE_JOB_POSTING_STATUS,
} from "./types";

import { createMessage } from "./messagesActions";

import axios from "axios";

import { tokenConfig } from "./authActions";

export const getJobPostingStatus = () => (dispatch, getState) => {
  axios
    .get("/api/job_posting_status/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_JOB_POSTING_STATUS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const deleteJobPostingStatus = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/job_posting_status/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_JOB_POSTING_STATUS,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addJobPostingStatus = (job_posting_status) => (
  dispatch,
  getState
) => {
  axios
    .post("/api/job_posting_status/", job_posting_status, tokenConfig(getState))
    .then(
      (response) => {
        dispatch({
          type: ADD_JOB_POSTING_STATUS,
          payload: response.data,
        });
      },
      (error) => {
        console.log(error);
      }
    );
};

export const modifyJobPostingStatus = (data, id) => (dispatch, getState) => {
  axios
    .patch(`/api/job_posting_status/${id}/`, data, tokenConfig(getState))
    .then((res) => {
      dispatch(
        createMessage({
          jobPostingMoved: "Job Post Moved Successfully",
        })
      );
      dispatch({
        type: MODIFY_JOB_POSTING_STATUS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
