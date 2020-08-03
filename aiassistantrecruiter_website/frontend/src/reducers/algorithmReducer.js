import {
  ALGORITHM_SUCCESS,
  ALGORITHM_FAIL,
  ALGORITHM_IN_PROGRESS,
} from "../actions/types";

const initialState = {
  algorithm_completed: false,
  algorithm_progress_percentage: 0,
  algorithm_outcome: "",
  algorithm_failed: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ALGORITHM_SUCCESS:
      return {
        ...state,
        algorithm_outcome: action.payload,
        algorithm_completed: true,
      };
    case ALGORITHM_FAIL:
      return {
        ...state,
        algorithm_progress_percentage: action.payload,
        algorithm_failed: true,
      };
    case ALGORITHM_IN_PROGRESS:
      // below if statement is used because we are calling getAlgorithProgress() which logically messes up a little bit here [so make it OK]
      return {
        ...state,
        algorithm_progress_percentage: action.payload,
      };
    default:
      return state;
  }
}

// case ALGORITHM_IN_PROGRESS:
//       // below if statement is used because we are calling getAlgorithProgress() which logically messes up a little bit here, so to make it up this has to be done
//       if (action.payload == 100 || state.algorithm_progress_percentage == 100) {
//         // state.algorithm_outcome = 100;
//         // state.algorithm_completed = true;
//         return {
//           ...state,
//           algorithm_progress_percentage: action.payload,
//           algorithm_outcome: action.payload,
//           algorithm_completed: true,
//         };
//       } else {
//         return {
//           ...state,
//           algorithm_progress_percentage: action.payload,
//         };
//       }
