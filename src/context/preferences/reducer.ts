import { PreferencesActions, PreferencesState } from "./types";

export const initialState: PreferencesState = {
  preferences: {
    favourite_sports: [],
    favourite_teams: [],
  },
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const preferencesReducer = (
  state: PreferencesState = initialState,
  action: PreferencesActions
): PreferencesState => {
  switch (action.type) {
    case "FETCH_PREFERENCES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_PREFERENCES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        preferences: action.payload,
      };

    case "FETCH_PREFERENCES_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case "UPDATE_PREFERENCES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "UPDATE_PREFERENCES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        preferences: action.payload,
      };

    case "UPDATE_PREFERENCES_FAILURE":
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
