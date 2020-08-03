import { SENDING_MSG, MSG_SUCCESS, MSG_FAIL } from "./types";

import { createMessage } from "./messagesActions";

import axios from "axios";

import { tokenConfig } from "./authActions";

export const sendSMS = () => (dispatch, getState) => {
  dispatch({
    type: SENDING_MSG,
  });

  axios
    .post("/send_sms/", tokenConfig(getState))
    .then((response) => {
      dispatch(createMessage({ msgSent: "SMS Sent" }));
      dispatch({
        type: MSG_SUCCESS,
      });
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      dispatch(
        createMessage({
          msgFailed: "SMS Failed",
        })
      );
      dispatch({
        type: MSG_FAIL,
      });
      console.log(error);
      console.log(error.data);
      console.log(error.response);
    });
};

export const sendWhatsAppMessage = () => (dispatch, getState) => {
  dispatch({
    type: SENDING_MSG,
  });

  axios
    .post("/send_whatsapp_msg/", tokenConfig(getState))
    .then((response) => {
      dispatch(createMessage({ msgSent: "WhatsApp msg Sent" }));
      dispatch({
        type: MSG_SUCCESS,
      });
      console.log(response);
      console.log(response.data);
    })
    .catch((error) => {
      dispatch(
        createMessage({
          msgFailed: "WhatsApp msg Failed",
        })
      );
      dispatch({
        type: MSG_FAIL,
      });
      console.log(error);
      console.log(error.data);
      console.log(error.response);
    });
};
