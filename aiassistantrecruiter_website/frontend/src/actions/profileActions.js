import axios from "axios";

import {
  UPDATE_PROFILE,
  GET_PROFILE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
} from "./types";

import { tokenConfig } from "./authActions";

import { createMessage } from "./messagesActions";

export const cancelProfileChanges = () => (dispatch) => {
  dispatch(
    createMessage({
      profile_update_canceled: "No Changes Made",
    })
  );
};

export const updateBaseUserProfile = (first_name, last_name, id) => (
  dispatch,
  getState
) => {
  dispatch({
    type: UPDATE_PROFILE,
  });

  // Request body(stringified) turning it to JSON
  const body = JSON.stringify({
    first_name: first_name,
    last_name: last_name,
  });

  axios
    .patch(`/api/auth/user/${id}/`, body, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        // payload: id,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: PROFILE_UPDATE_FAILURE,
      });
    });
};

export const updateCustomUserProfile = (data, id) => (dispatch, getState) => {
  dispatch({
    type: UPDATE_PROFILE,
  });
  axios
    .patch(`/api/profile/${id}/`, data, tokenConfig(getState))
    .then((res) => {
      dispatch(
        createMessage({
          profile_update_success: "Updated Successfully",
        })
      );
      dispatch({
        type: PROFILE_UPDATE_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => {
      dispatch(
        createMessage({
          profile_update_failure: "Error While Updating",
        })
      );
      console.log(err);
      dispatch({
        type: PROFILE_UPDATE_FAILURE,
      });
    });
};

export const getUserProfile = () => (dispatch, getState) => {
  axios
    .get(`/api/profile/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_PROFILE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
