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

export interface DetailedArticle extends Article {
  content: string;
}

export interface ArticlesState {
  articles: Article[];
  article: Article | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  articlesToDisplay: Article[];
}

export type ArticlesActions =
  | { type: "FETCH_ARTICLES_REQUEST" }
  | { type: "FETCH_ARTICLES_SUCCESS"; payload: Article[] }
  | { type: "FETCH_ARTICLES_FAILURE"; payload: string }
  | { type: "FILTER_ARTICLES"; payload: number };
// | { type: "FETCH_SINGLE_ARTICLE_REQUEST" }
// | { type: "FETCH_SINGLE_ARTICLE_SUCCESS"; payload: Article }
// | { type: "FETCH_SINGLE_ARTICLE_FAILURE"; payload: string };

export type ArticlesDispatch = React.Dispatch<ArticlesActions>;
