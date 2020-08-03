import {
  GET_POSITIONS,
  DELETE_POSITION,
  ADD_POSITION,
  UPDATE_POSITION,
} from "./types";
import axios from "axios";

import { tokenConfig } from "./authActions";

export const getPositions = () => (dispatch, getState) => {
  axios
    .get("/api/job_posting/", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_POSITIONS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const addPosition = (job_position) => (dispatch, getState) => {
  axios.post("/api/job_posting/", job_position, tokenConfig(getState)).then(
    (response) => {
      dispatch({
        type: ADD_POSITION,
        payload: response.data,
      });
    },
    (error) => {
      console.log(error);
    }
  );
};

export const deletePosition = (id) => (dispatch, getState) => {
  axios
    .delete(`/api/job_posting/${id}/`, tokenConfig(getState)) //change .get() to .delete() to actually delete from db
    .then((res) => {
      dispatch({
        type: DELETE_POSITION,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const updatePosition = (data, id) => (dispatch, getState) => {
  axios
    .patch(`/api/job_posting/${id}/`, data, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: UPDATE_POSITION,
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
