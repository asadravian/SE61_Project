import { EMAIL_SUCCESS, EMAIL_FAIL, SENDING_EMAIL } from "../actions/types";

const initialState = {
  email_sent: false,
  sending_email: false,
  email_failed: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case EMAIL_SUCCESS:
      return {
        ...state,
        sending_email: false,
        email_sent: true,
      };
    case EMAIL_FAIL:
      return {
        ...state,
        sending_email: false,
        email_failed: true,
      };
    case SENDING_EMAIL:
      return {
        ...state,
        sending_email: true,
      };
    default:
      return state;
  }
}
