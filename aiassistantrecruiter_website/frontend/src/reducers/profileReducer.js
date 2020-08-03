import { GET_PROFILE, UPDATE_PROFILE } from "../actions/types";

const initialState = {
  profile: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload[0],
      };
    case UPDATE_PROFILE:
      //   var job_position_id = parseInt(action.payload.id);
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
}
