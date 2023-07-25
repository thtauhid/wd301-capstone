import { MatchesActions, MatchesState } from "./types";

export const initialState: MatchesState = {
  matches: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const matchesReducer = (
  state: MatchesState = initialState,
  action: MatchesActions
): MatchesState => {
  switch (action.type) {
    case "FETCH_MATCHES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_MATCHES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        matches: action.payload,
      };

    case "FETCH_MATCHES_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case "REFRESH_MATCH_SUCCESS":
      return {
        ...state,
        matches: state.matches.map((match) =>
          match.id === action.payload.id ? action.payload : match
        ),
      };

    case "REFRESH_MATCH_FAILURE":
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
