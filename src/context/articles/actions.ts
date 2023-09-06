import { API_ENDPOINT } from "@/config/constants";
import { Article, ArticlesDispatch, DetailedArticle } from "./types";

export const fetchArticles = async (dispatch: ArticlesDispatch) => {
  try {
    dispatch({ type: "FETCH_ARTICLES_REQUEST" });

    const response = await fetch(`${API_ENDPOINT}/articles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: Article[] = await response.json();
    console.log({ data });

    dispatch({ type: "FETCH_ARTICLES_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching articles:", error);
    dispatch({
      type: "FETCH_ARTICLES_FAILURE",
      payload: "Unable to load articles",
    });
  }
};

export const fetchSingleArticle = async (id: string) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/articles/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: DetailedArticle = await response.json();

    console.log({ data });
    return data;
  } catch (error) {
    console.log("Error fetching single article:", error);
  }
};

export const filterArticles = (dispatch: ArticlesDispatch, id: number) => {
  dispatch({ type: "FILTER_ARTICLES", payload: id });
};
