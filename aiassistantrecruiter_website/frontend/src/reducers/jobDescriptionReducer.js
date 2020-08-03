import {
  GET_JOB_DESCRIPTION,
  ADD_JOB_DESCRIPTION,
  DELETE_JOB_DESCRIPTION
} from "../actions/types";

const initialState = {
  job_description: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_JOB_DESCRIPTION:
      return {
        ...state,
        job_description: action.payload
      };
    case DELETE_JOB_DESCRIPTION:
      return {
        ...state,
        job_description: state.job_description.filter(
          job_description => job_description.id !== action.payload
        )
      };
    case ADD_JOB_DESCRIPTION:
      return {
        ...state,
        job_description: [...state.job_description, action.payload]
      };
    default:
      return state;
  }
}
