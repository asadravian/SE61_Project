import { SENDING_EMAIL, EMAIL_SUCCESS, EMAIL_FAIL } from "./types";

import { createMessage } from "./messagesActions";

import axios from "axios";

import { tokenConfig } from "./authActions";

export const sendEmail = () => (dispatch, getState) => {
  dispatch({
    type: SENDING_EMAIL,
  });

  // axios
  //   .post("/send_email/", tokenConfig(getState), {
  //     headers: {
  //       "Content-Length": "0", //in case for some exceptions posed by browsers like IE
  //     },
  //   })
  axios
    .post("/send_email/", tokenConfig(getState))
    .then((response) => {
      dispatch(createMessage({ emailSent: "Email Sent" }));
      dispatch({
        type: EMAIL_SUCCESS,
      });
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      dispatch(
        createMessage({
          emailFailed: "Email Failed",
        })
      );
      dispatch({
        type: EMAIL_FAIL,
      });
      console.log(error);
      console.log(error.data);
      console.log(error.response);
    });
};

export const sendCustomEmail = (recipient_email, email_subject, email_body) => (
  dispatch,
  getState
) => {
  dispatch({
    type: SENDING_EMAIL,
  });

  // Request body(stringified) turning it to JSON
  const body = JSON.stringify({
    recipient_email: recipient_email,
    email_subject: email_subject,
    email_body: email_body,
  });

  axios
    .post("/send_custom_email/", body, tokenConfig(getState))
    .then((response) => {
      dispatch(createMessage({ emailSent: "Email Sent" }));
      dispatch({
        type: EMAIL_SUCCESS,
      });
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      dispatch(
        createMessage({
          emailFailed: "Email Failed",
        })
      );
      dispatch({
        type: EMAIL_FAIL,
      });
      console.log(error);
      console.log(error.data);
    });
};
