import { FavouritesDispatch } from "./types";

export const setFavoriteSport = async (
  dispatch: FavouritesDispatch,
  sportId: number
) => {
  dispatch({ type: "SET_FAVOURITE_SPORT", payload: sportId });
};

export const setFavoriteTeam = async (
  dispatch: FavouritesDispatch,
  teamId: number
) => {
  dispatch({ type: "SET_FAVOURITE_TEAM", payload: teamId });
};
