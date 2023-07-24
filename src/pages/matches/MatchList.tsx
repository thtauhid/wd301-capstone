import { useEffect } from "react";
import { useMatchesDispatch } from "@/context/matches/context";
import { fetchMatches } from "@/context/matches/actions";
import MatchListItems from "./MatchListItems";

function MatchList() {
  const MatchesDispatch = useMatchesDispatch();

  useEffect(() => {
    fetchMatches(MatchesDispatch);
  });

  return (
    <div>
      <MatchListItems />
    </div>
  );
}

export default MatchList;
