import axios from "axios";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_WITH_REMEMBER_ME_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ERRORS,
} from "./types";

export const loadUser = () => (dispatch, getState) => {
  dispatch({
    type: USER_LOADING,
  });

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((response) => {
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const login = (username, password, remember_me) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  // Request body(stringified) turning it to JSON
  const body = JSON.stringify({
    username: username,
    password: password,
    remember_me: remember_me,
  });

  // let remember_me = false;
  // Send request to the user api
  axios
    .post("/api/auth/login", body, config)
    .then((response) => {
      if (remember_me == false) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      } else {
        dispatch({
          type: LOGIN_WITH_REMEMBER_ME_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};

export const register = (
  username,
  password,
  email,
  first_name,
  last_name,
  promotion_status
) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    username,
    password,
    email,
    first_name,
    last_name,
  });

  axios
    .post("/api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      // console.log(err.response.data);
      // console.log(err.response.status);
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
      dispatch(err.response.data, err.response.status);
      dispatch({
        type: REGISTER_FAIL,
      });
    });
};

export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout/", null, tokenConfig(getState))
    .then((response) => {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    })
    .catch((err) => {
      console.log(err);
      console.log(err.response.data); //gives more accurate error msg
    });
};

// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().authReducer.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
