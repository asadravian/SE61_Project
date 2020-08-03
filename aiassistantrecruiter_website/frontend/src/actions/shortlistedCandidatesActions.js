import {
  GET_SHORTLISTED_CANDIDATES,
  GET_SHORTLISTED_CANDIDATE,
  ADD_SHORTLISTED_CANDIDATES,
  DELETE_SHORTLISTED_CANDIDATE,
} from "./types";

import axios from "axios";

import { tokenConfig } from "./authActions";

export const getShortlistedCandidates = () => (dispatch, getState) => {
  axios
    .get("/api/shortlisted_candidates/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_SHORTLISTED_CANDIDATES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getShortlistedCandidate = (shortlisted_candidate_id) => (
  dispatch,
  getState
) => {
  axios
    .get(
      `/api/shortlisted_candidates/${shortlisted_candidate_id}/`,
      tokenConfig(getState)
    )
    .then((res) => {
      dispatch({
        type: GET_SHORTLISTED_CANDIDATE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// "for loop" one by one delete db record
export const deleteShortlistedCandidate = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/shortlisted_candidates/${id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_SHORTLISTED_CANDIDATE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addShortlistedCandidates = (shortlisted_candidate) => (
  dispatch,
  getState
) => {
  axios
    .post(
      "/api/shortlisted_candidates/",
      shortlisted_candidate,
      tokenConfig(getState)
    )
    .then((response) => {
      dispatch({
        type: ADD_SHORTLISTED_CANDIDATES,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
