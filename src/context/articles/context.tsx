import React, { createContext, useContext, useReducer } from "react";
import { initialState, articlesReducer } from "./reducer";
import { ArticlesDispatch, ArticlesState } from "./types";

const ArticlesStateContext = createContext<ArticlesState>(initialState);
const ArticlesDispatchContext = createContext<ArticlesDispatch>(() => {});

export const ArticlesProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(articlesReducer, initialState);

  return (
    <ArticlesStateContext.Provider value={state}>
      <ArticlesDispatchContext.Provider value={dispatch}>
        {children}
      </ArticlesDispatchContext.Provider>
    </ArticlesStateContext.Provider>
  );
};

export const useArticlesState = () => useContext(ArticlesStateContext);
export const useArticlesDispatch = () => useContext(ArticlesDispatchContext);
