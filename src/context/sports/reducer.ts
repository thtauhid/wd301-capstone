import { SportsActions, SportsState } from "./types";

export const initialState: SportsState = {
  sports: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
  selectedSport: 0,
};

export const sportsReducer = (
  state: SportsState = initialState,
  action: SportsActions
): SportsState => {
  switch (action.type) {
    case "FETCH_SPORTS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_SPORTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        sports: action.payload,
      };

    case "FETCH_SPORTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case "SELECT_SPORT":
      return {
        ...state,
        selectedSport: action.payload,
      };

    default:
      return state;
  }
};
