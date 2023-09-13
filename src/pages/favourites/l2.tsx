import { useSportsDispatch } from "@/context/sports/context";
import Filter from "./Filter";
import { useEffect } from "react";
import { fetchSports } from "@/context/sports/actions";
import { fetchTeams } from "@/context/teams/actions";
import { useTeamsDispatch } from "@/context/teams/context";
import { H2 } from "@/components/ui/heading";
import { useArticlesDispatch } from "@/context/articles/context";
import { fetchArticles } from "@/context/articles/actions";

function L2() {
  const SportsDispatch = useSportsDispatch();
  const TeamsDispatch = useTeamsDispatch();
  const ArticlesDiapatch = useArticlesDispatch();

  useEffect(() => {
    fetchSports(SportsDispatch);
    fetchTeams(TeamsDispatch);
    fetchArticles(ArticlesDiapatch);
  }, [ArticlesDiapatch, SportsDispatch, TeamsDispatch]);

  return (
    <div>
      <H2>Favourites</H2>
      <Filter />
    </div>
  );
}

export default L2;
