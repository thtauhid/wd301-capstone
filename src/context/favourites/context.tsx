import React, { createContext, useContext, useReducer } from "react";
import { initialState, favouritesReducer } from "./reducer";
import { FavouritesDispatch, FavouritesState } from "./types";

const FavouritesStateContext = createContext<FavouritesState>(initialState);
const FavouritesDispatchContext = createContext<FavouritesDispatch>(() => {});

export const FavouritesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(favouritesReducer, initialState);

  return (
    <FavouritesStateContext.Provider value={state}>
      <FavouritesDispatchContext.Provider value={dispatch}>
        {children}
      </FavouritesDispatchContext.Provider>
    </FavouritesStateContext.Provider>
  );
};

export const useFavouritesState = () => useContext(FavouritesStateContext);
export const useFavouritesDispatch = () =>
  useContext(FavouritesDispatchContext);
