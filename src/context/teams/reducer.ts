import { TeamsActions, TeamsState } from "./types";

export const initialState: TeamsState = {
  teams: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const teamsReducer = (
  state: TeamsState = initialState,
  action: TeamsActions
): TeamsState => {
  switch (action.type) {
    case "FETCH_TEAMS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_TEAMS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        teams: action.payload,
      };

    case "FETCH_TEAMS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};
