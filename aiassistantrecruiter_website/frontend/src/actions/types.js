//This file "types.js" contains all our types

// for sms
export const MSG_SUCCESS = "MSG_SUCCESS";
export const SENDING_MSG = "SENDING_MSG";
export const MSG_FAIL = "MSG_FAIL";

// for email
export const EMAIL_SUCCESS = "EMAIL_SUCCESS";
export const SENDING_EMAIL = "SENDING_EMAIL";
export const EMAIL_FAIL = "EMAIL_FAIL";

//for messages (info msgs like job posting successful or failed, etc)
export const CREATE_MESSAGE = "CREATE_MESSAGE";

//for errors (error msgs only)
export const GET_ERRORS = "GET_ERRORS";

//algorithm status and progress types
export const ALGORITHM_SUCCESS = "ALGORITHM_SUCCESS";
export const ALGORITHM_FAIL = "ALGORITHM_FAIL";
export const ALGORITHM_IN_PROGRESS = "ALGORITHM_IN_PROGRESS";

// file uploads
export const RESET = "RESET REDUX FILE STATE";
export const UPLOAD_SUCCESS = "UPLOAD_SUCCESS";
export const UPLOAD_PROGRESS = "UPLOAD_PROGRESS";
export const UPLOAD_FAIL = "UPLOAD_FAIL";
export const GET_FILE_NAMES = "GET_FILE_NAMES";
export const GET_FILE_NAME = "GET_SPECIFIC_FILE_NAME";
export const ADD_FILE_NAME = "ADD_FILE_NAME";
export const DELETE_FILE_NAME = "DELETE_FILE_NAME";

//user_accounts custom api types for profile
export const GET_PROFILE = "GET_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const PROFILE_UPDATE_SUCCESS = "PROFILE_UPDATE_SUCCESS";
export const PROFILE_UPDATE_FAILURE = "PROFILE_UPDATE_FAILURE";

//get_help api types
export const ADD_HELP = "ADD_HELP";
export const GET_HELP = "GET_HELP";

// position or job_posting api types
export const GET_POSITIONS = "GET_POSITIONS";
export const ADD_POSITION = "ADD_POSITION";
export const DELETE_POSITION = "DELETE_POSITION";
export const UPDATE_POSITION = "UPDATE_POSITION";

export const GET_JOB_DESCRIPTION = "GET_JOB_DESCRIPTION";
export const ADD_JOB_DESCRIPTION = "ADD_JOB_DESCRIPTION";
export const DELETE_JOB_DESCRIPTION = "DELETE_JOB_DESCRIPTION";

export const GET_JOB_POSTING_STATUS = "GET_JOB_POSTING_STATUS";
export const ADD_JOB_POSTING_STATUS = "ADD_JOB_POSTING_STATUS";
export const MODIFY_JOB_POSTING_STATUS = "MODIFY_JOB_POSTING_STATUS";
export const DELETE_JOB_POSTING_STATUS = "DELETE_JOB_POSTING_STATUS";

// shortlisted_candidates api types
export const GET_SHORTLISTED_CANDIDATE = "GET_SHORTLISTED_CANDIDATE";
export const GET_SHORTLISTED_CANDIDATES = "GET_SHORTLISTED_CANDIDATES";
export const ADD_SHORTLISTED_CANDIDATES = "ADD_SHORTLISTED_CANDIDATES";
export const DELETE_SHORTLISTED_CANDIDATE = "DELETE_SHORTLISTED_CANDIDATE";

// user auth types
export const USER_LOADING = "USER_LOADING";
export const USER_LOADED = "USER_LOADED";
export const AUTH_ERROR = "AUTH_ERROR";

// login types
export const LOGIN_WITH_REMEMBER_ME_SUCCESS = "LOGIN_WITH_REMEMBER_ME_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

// logout success
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";

// register success and fail
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const CLEAR_LEADS = "CLEAR_LEADS";
