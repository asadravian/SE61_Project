import { MSG_SUCCESS, MSG_FAIL, SENDING_MSG } from "../actions/types";

const initialState = {
  msg_sent: false,
  sending_msg: false,
  msg_failed: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MSG_SUCCESS:
      return {
        ...state,
        sending_msg: false,
        msg_sent: true,
      };
    case MSG_FAIL:
      return {
        ...state,
        sending_msg: false,
        msg_failed: true,
      };
    case SENDING_MSG:
      return {
        ...state,
        sending_msg: true,
      };
    default:
      return state;
  }
}
