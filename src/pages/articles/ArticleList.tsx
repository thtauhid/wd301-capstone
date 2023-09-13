import { useEffect } from "react";
import { fetchArticles } from "@/context/articles/actions";
import { useArticlesDispatch } from "@/context/articles/context";
import PaginatedArticles from "./PaginatedArticles";
import ArticleTypeFilter from "./ArticleTypeFilter";
import { useSportsDispatch } from "@/context/sports/context";
import { fetchSports } from "@/context/sports/actions";
import { fetchPreferences } from "@/context/preferences/actions";
import { usePreferencesDispatch } from "@/context/preferences/context";

function ArticleList() {
  const articlesDispatch = useArticlesDispatch();
  const sportsDispatch = useSportsDispatch();
  const PreferenceDispatch = usePreferencesDispatch();

  useEffect(() => {
    fetchArticles(articlesDispatch);
    fetchSports(sportsDispatch);
    fetchPreferences(PreferenceDispatch);
  }, [PreferenceDispatch, articlesDispatch, sportsDispatch]);

  return (
    <div>
      <ArticleTypeFilter />
      <PaginatedArticles />
    </div>
  );
}

export default ArticleList;
