import { useEffect } from "react";
import { fetchArticles } from "@/context/articles/actions";
import { useArticlesDispatch } from "@/context/articles/context";
import ArticleListItems from "./ArticleListItems";

function ArticleList() {
  const articlesDispatch = useArticlesDispatch();

  useEffect(() => {
    fetchArticles(articlesDispatch);
  });

  return (
    <div>
      <ArticleListItems />
    </div>
  );
}

export default ArticleList;
