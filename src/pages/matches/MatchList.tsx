import { useEffect } from "react";
import { useMatchesDispatch } from "@/context/matches/context";
import { fetchMatches } from "@/context/matches/actions";
import MatchListItems from "./MatchListItems";
import { fetchPreferences } from "@/context/preferences/actions";
import { usePreferencesDispatch } from "@/context/preferences/context";

function MatchList() {
  const PreferencesDispatch = usePreferencesDispatch();
  const MatchesDispatch = useMatchesDispatch();

  useEffect(() => {
    fetchPreferences(PreferencesDispatch);
    fetchMatches(MatchesDispatch);
  }, [MatchesDispatch, PreferencesDispatch]);

  return (
    <div>
      <MatchListItems />
    </div>
  );
}

export default MatchList;
