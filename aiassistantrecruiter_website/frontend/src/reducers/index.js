import { combineReducers } from "redux";
import jobPositionReducer from "./jobPositionsReducer";
import jobPostingStatusReducer from "./jobPostingStatusReducer";
import jobDescriptionReducer from "./jobDescriptionReducer";
import shortlistedCandidatesReducer from "./shortlistedCandidatesReducer";
import authReducer from "./authReducer";
import gethelpReducer from "./gethelpReducer";
import fileReducer from "./fileReducer";
import algorithmReducer from "./algorithmReducer";
import errorsReducer from "./errorsReducer";
import messagesReducer from "./messagesReducer";
import emailReducer from "./emailReducer";
import smsReducer from "./smsReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  jobPositionReducer: jobPositionReducer,
  jobDescriptionReducer: jobDescriptionReducer,
  jobPostingStatusReducer: jobPostingStatusReducer,
  shortlistedCandidatesReducer: shortlistedCandidatesReducer,
  gethelpReducer: gethelpReducer,
  authReducer: authReducer,
  files: fileReducer,
  algorithmReducer: algorithmReducer,
  errorsReducer: errorsReducer,
  messagesReducer: messagesReducer,
  emailReducer: emailReducer,
  smsReducer: smsReducer,
  profileReducer: profileReducer,
});
