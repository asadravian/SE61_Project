import {
  GET_SHORTLISTED_CANDIDATES,
  GET_SHORTLISTED_CANDIDATE,
  DELETE_SHORTLISTED_CANDIDATE,
  ADD_SHORTLISTED_CANDIDATES,
} from "../actions/types";

const initialState = {
  shortlisted_candidates: [],
  shortlisted_candidate: {
    candidate_image: null,
    candidate_name: "...", //this state will be shown prior to actual data rather than null which brings up an error when getting null data
    candidate_email: "...@gmail.com",
    candidate_phone: "...",
    candidate_institute: "...",
    candidate_degree: "...",
    candidate_cgpa: 0,
    candidate_match: 0,
    candidate_location: "...",
    candidate_gender: "...",
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SHORTLISTED_CANDIDATES:
      // sort the candidates in descending order
      // for descending: b.attribute - a.attribute
      // for ascending: a.attribute - b.attribute
      // sorts based on attribute selected
      action.payload.sort(function (a, b) {
        return b.candidate_match - a.candidate_match;
      });
      return {
        ...state,
        shortlisted_candidates: action.payload,
      };
    case GET_SHORTLISTED_CANDIDATE:
      return {
        ...state,
        shortlisted_candidate: action.payload,
      };
    case DELETE_SHORTLISTED_CANDIDATE:
      return {
        ...state,
        shortlisted_candidates: state.shortlisted_candidates.filter(
          (position) => position.id !== action.payload
        ),
      };
    case ADD_SHORTLISTED_CANDIDATES:
      return {
        ...state,
        shortlisted_candidates: [
          ...state.shortlisted_candidates,
          action.payload,
        ],
      };
    default:
      return state;
  }
}
