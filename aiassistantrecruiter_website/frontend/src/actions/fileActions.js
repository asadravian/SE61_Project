import {
  UPLOAD_SUCCESS,
  UPLOAD_FAIL,
  RESET,
  UPLOAD_PROGRESS,
  ADD_FILE_NAME,
  GET_FILE_NAMES,
  GET_FILE_NAME,
  DELETE_FILE_NAME,
} from "./types";

import { createMessage } from "./messagesActions";

import axios from "axios";

import { tokenConfig } from "./authActions";

export const resetReduxFileState = () => (dispatch) => {
  dispatch({
    type: RESET,
  });
};

export const sendFilesToServer = (files) => (dispatch) => {
  const formData = new FormData();

  for (var i = 0; i < files.length; i++) {
    formData.append("file" + i, files[i]);
  }

  var percentage = 0;
  axios
    .post("/files/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: function (progressEvent) {
        percentage = parseInt(
          Math.round((progressEvent.loaded / progressEvent.total) * 100)
        );
        if (percentage < 100) {
          dispatch({
            type: UPLOAD_PROGRESS,
            payload: percentage,
          });
        }
        console.log(
          `${progressEvent.loaded} of ${progressEvent.total} | ${percentage}%`
        );
      },
    })
    .then(() => {
      dispatch({
        type: UPLOAD_PROGRESS,
        payload: percentage,
      });
    })
    .then(() => {
      setTimeout(() => {
        dispatch(
          createMessage({ uploadSuccessful: "Files Uploaded Successfully" })
        );
        dispatch({
          type: UPLOAD_SUCCESS,
          payload: "Success: Uploaded Successfully",
        });
      }, 1000);
    })
    .catch((err) => {
      dispatch({
        type: UPLOAD_FAIL,
        payload: "ERROR: UPLOAD FAILED ",
      });
      console.log(err);
    });
};

export const getFiles = () => (dispatch, getState) => {
  axios
    .get("/api/files/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FILE_NAMES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getSpecificFile = (file_id) => (dispatch, getState) => {
  axios
    .get(`/api/files/${file_id}/`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_FILE_NAME,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addFile = (file_name) => (dispatch, getState) => {
  // argument file_name: request body is stringified below [turned into JSON format]
  const body = JSON.stringify({ file_name: file_name });

  axios.post("/api/files/", body, tokenConfig(getState)).then(
    (response) => {
      dispatch({
        type: ADD_FILE_NAME,
        payload: response.data,
      });
    },
    (error) => {
      console.log(error);
    }
  );
};

// "for loop" one by one delete db record
export const deleteFile = (file_id) => (dispatch, getState) => {
  axios.delete(`/api/files/${file_id}/`, tokenConfig(getState)).then(
    (response) => {
      dispatch({
        type: DELETE_FILE_NAME,
        payload: response.data,
      });
    },
    (error) => {
      console.log(error);
    }
  );
};
