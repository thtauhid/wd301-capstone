import { useEffect } from "react";
import { fetchArticles } from "@/context/articles/actions";
import { useArticlesDispatch } from "@/context/articles/context";
import PaginatedArticles from "./PaginatedArticles";
import ArticleTypeFilter from "./ArticleTypeFilter";
import { useSportsDispatch } from "@/context/sports/context";
import { fetchSports } from "@/context/sports/actions";

function ArticleList() {
  const articlesDispatch = useArticlesDispatch();
  const sportsDispatch = useSportsDispatch();

  useEffect(() => {
    fetchArticles(articlesDispatch);
    fetchSports(sportsDispatch);
  });

  return (
    <div>
      <ArticleTypeFilter />
      <PaginatedArticles />
    </div>
  );
}

export default ArticleList;
