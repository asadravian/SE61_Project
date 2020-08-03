import { ADD_HELP, GET_HELP } from "../actions/types";

const initialState = {
  help: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_HELP:
      return {
        ...state,
        help: action.payload
      };
    case ADD_HELP:
      return {
        ...state,
        help: [...state.help, action.payload]
      };
    default:
      return state;
  }
}
