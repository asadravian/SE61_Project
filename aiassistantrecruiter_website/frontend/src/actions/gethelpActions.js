import { ADD_HELP, GET_HELP } from "./types";
import axios from "axios";

import { createMessage } from "./messagesActions";

import { tokenConfig } from "./authActions";

export const getHelp = () => (dispatch, getState) => {
  axios
    .get("/api/get_help/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_HELP,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addHelp = (help_info) => (dispatch, getState) => {
  axios
    .post("/api/get_help/", help_info, tokenConfig(getState))
    .then((response) => {
      dispatch(
        createMessage({
          help_success: "Submitted Successfully",
        })
      );
      dispatch({
        type: ADD_HELP,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch(
        createMessage({
          help_error: "There was a problem submitting it",
        })
      );
      console.log(err);
    });
};
