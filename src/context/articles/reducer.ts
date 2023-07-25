import { ArticlesActions, ArticlesState } from "./types";

export const initialState: ArticlesState = {
  articles: [],
  article: null,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const articlesReducer = (
  state: ArticlesState = initialState,
  action: ArticlesActions
): ArticlesState => {
  switch (action.type) {
    case "FETCH_ARTICLES_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_ARTICLES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        articles: action.payload,
      };

    case "FETCH_ARTICLES_FAILURE":
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
