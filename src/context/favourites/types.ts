export interface Favourites {
  sport: number;
  team: number;
}

export interface FavouritesState {
  favourites: Favourites;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type FavouritesActions =
  | { type: "FETCH_FAVOURITES_REQUEST" }
  | { type: "FETCH_FAVOURITES_SUCCESS"; payload: Favourites }
  | { type: "FETCH_FAVOURITES_FAILURE"; payload: string }
  | { type: "SET_FAVOURITE_SPORT"; payload: number }
  | { type: "SET_FAVOURITE_TEAM"; payload: number };

export type FavouritesDispatch = React.Dispatch<FavouritesActions>;
