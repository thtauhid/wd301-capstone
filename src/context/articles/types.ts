export interface Article {
  id: number;
  title: string;
  thumbnail: string;
  sport: {
    id: number;
    name: string;
  };
  date: string;
  summary: string;
}

export interface ArticlesState {
  articles: Article[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type ArticlesActions =
  | { type: "FETCH_ARTICLES_REQUEST" }
  | { type: "FETCH_ARTICLES_SUCCESS"; payload: Article[] }
  | { type: "FETCH_ARTICLES_FAILURE"; payload: string };

export type ArticlesDispatch = React.Dispatch<ArticlesActions>;
