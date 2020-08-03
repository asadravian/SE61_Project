import {
  UPLOAD_SUCCESS,
  UPLOAD_PROGRESS,
  RESET,
  UPLOAD_FAIL,
  GET_FILE_NAMES,
  GET_FILE_NAME,
  ADD_FILE_NAME,
} from "../actions/types";

const initialState = {
  uploadProgress: 0,
  files: [],
  uploadStatusAllFiles: "",
  fileNames: [],
  specificFileName: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case RESET: //to reset the redux state of file after the job posting [mainly because the next button is to be disabled again]
      return {
        initialState,
      };
    case UPLOAD_SUCCESS:
      return {
        ...state,
        uploadStatusAllFiles: action.payload,
        uploadProgress: 0, //on success progress should be reset to 0
      };
    case UPLOAD_PROGRESS:
      console.log("Percentage: " + action.payload);
      return {
        ...state,
        uploadProgress: action.payload,
      };
    case UPLOAD_FAIL:
      return {
        ...state,
        uploadStatusAllFiles: action.payload,
      };
    case GET_FILE_NAME:
      return {
        ...state,
        fileName: action.payload,
      };
    case GET_FILE_NAMES:
      return {
        ...state,
        fileNames: action.payload,
      };
    case ADD_FILE_NAME:
      return {
        ...state,
        fileNames: [...state.fileNames, action.payload],
      };
    default:
      return state;
  }
}
