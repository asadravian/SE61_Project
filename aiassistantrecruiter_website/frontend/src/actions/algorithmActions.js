import {
  ALGORITHM_IN_PROGRESS,
  ALGORITHM_SUCCESS,
  ALGORITHM_FAIL,
} from "./types";

import { createMessage } from "./messagesActions";

import axios from "axios";

import { tokenConfig } from "./authActions";

export const runAlgorithm = (job_posting_id) => (dispatch, getState) => {
  dispatch({
    type: ALGORITHM_IN_PROGRESS,
  });
  dispatch(createMessage({ jobPostingAlgorithmStarted: "Algorithm Started" }));
  const body = JSON.stringify({ job_posting_id: job_posting_id });

  axios
    .post("/ai_algorithm_running/", body, tokenConfig(getState), {
      headers: {
        "Content-Length": "0", //in case for some exceptions posed by browsers like IE
      },
    })
    .then((response) => {
      dispatch(
        createMessage({ jobPostingAlgorithmFinished: "Algorithm Finished" })
      );
      dispatch({
        type: ALGORITHM_SUCCESS,
        payload: response.data,
      });
      console.log(response.data);
    })
    .catch((error) => {
      dispatch(
        createMessage({
          jobPostingAlgorithmError: "Algorithm Affected and Terminated",
        })
      );
      dispatch({
        type: ALGORITHM_FAIL,
        payload: "ERROR: ALGORITHM AFFECTED",
      });
      console.log(error);
    });
};

export const getAlgorithmProgress = () => (dispatch, getState) => {
  axios
    .get("/ai_algorithm_progress/", tokenConfig(getState))
    .then((response) => {
      dispatch({
        type: ALGORITHM_IN_PROGRESS,
        payload: response.data,
      });
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
