import {
  GET_JOB_POSTING_STATUS,
  MODIFY_JOB_POSTING_STATUS,
  DELETE_JOB_POSTING_STATUS,
} from "../actions/types";

const initialState = {
  status: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_JOB_POSTING_STATUS:
      return {
        ...state,
        status: action.payload,
      };

    case MODIFY_JOB_POSTING_STATUS:
      var job_status_id = parseInt(action.payload.id);

      state.status = state.status.filter(
        (status) => status.id !== job_status_id
      );
      return {
        status: [...state.status, action.payload],
      };
    case DELETE_JOB_POSTING_STATUS:
      return {
        ...state,
        status: state.status.filter(
          (individual_status) => individual_status.id !== action.payload
        ),
      };
    default:
      return state;
  }
}
