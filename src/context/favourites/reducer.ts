import { FavouritesActions, FavouritesState } from "./types";

export const initialState: FavouritesState = {
  favourites: {
    sport: 0,
    team: 0,
  },
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const favouritesReducer = (
  state: FavouritesState = initialState,
  action: FavouritesActions
): FavouritesState => {
  switch (action.type) {
    case "FETCH_FAVOURITES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_FAVOURITES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        favourites: action.payload,
      };

    case "FETCH_FAVOURITES_FAILURE":
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
