import { useEffect } from "react";
import { fetchArticles } from "@/context/articles/actions";
import { useArticlesDispatch } from "@/context/articles/context";
import PaginatedArticles from "./PaginatedArticles";

function ArticleList() {
  const articlesDispatch = useArticlesDispatch();

  useEffect(() => {
    fetchArticles(articlesDispatch);
  });

  return (
    <div>
      <PaginatedArticles />
    </div>
  );
}

export default ArticleList;
