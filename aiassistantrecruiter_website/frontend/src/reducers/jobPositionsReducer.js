import {
  GET_POSITIONS,
  DELETE_POSITION,
  ADD_POSITION,
  UPDATE_POSITION,
} from "../actions/types";

const initialState = {
  positions: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSITIONS:
      return {
        ...state,
        positions: action.payload,
      };
    case DELETE_POSITION:
      return {
        ...state,
        positions: state.positions.filter(
          (position) => position.id !== action.payload
        ),
      };
    case ADD_POSITION:
      return {
        ...state,
        positions: [...state.positions, action.payload],
      };
    case UPDATE_POSITION: //THIS WORKS
      var job_position_id = parseInt(action.payload.id);
      return {
        ...state,
        positions: state.positions.filter(
          (position) => position.id !== job_position_id
        ),
        positions: [...state.positions, action.payload],
      };
    // case UPDATE_POSITION:
    //   var job_position_id = parseInt(action.payload.id);

    //   state.positions = state.positions.filter(
    //     (position) => position.id !== job_position_id
    //   );
    //   return {
    //     position: [...state.positions, action.payload],
    //   };
    default:
      return state;
  }
}
