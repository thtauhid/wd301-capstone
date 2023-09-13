import { H3 } from "@/components/ui/heading";
import SportsPreferences from "./SportsPreferences";
import TeamsPreferences from "./TeamsPreferences";
import { useSportsDispatch, useSportsState } from "@/context/sports/context";
import {
  usePreferencesDispatch,
  usePreferencesState,
} from "@/context/preferences/context";
import { useEffect } from "react";
import { fetchSports } from "@/context/sports/actions";
import {
  fetchPreferences,
  updatePreferences as updatePreferencesAction,
} from "@/context/preferences/actions";
import { fetchTeams } from "@/context/teams/actions";
import { useTeamsDispatch, useTeamsState } from "@/context/teams/context";

function UpdatePreferences() {
  const SportsDispatch = useSportsDispatch();
  const TeamsDispatch = useTeamsDispatch();
  const PreferencesDispatch = usePreferencesDispatch();

  const { sports } = useSportsState();
  const { teams } = useTeamsState();
  const { preferences } = usePreferencesState();

  useEffect(() => {
    fetchSports(SportsDispatch);
    fetchTeams(TeamsDispatch);
    fetchPreferences(PreferencesDispatch);
  }, [PreferencesDispatch, SportsDispatch, TeamsDispatch]);

  const updatePreferences = (
    type: "sport" | "team",
    id: number,
    isChecked: boolean
  ) => {
    console.table({ type, id, isChecked });

    const updatedPreferences = {
      ...preferences,
      [type === "sport" ? "favourite_sports" : "favourite_teams"]: isChecked
        ? [
            ...preferences[
              type === "sport" ? "favourite_sports" : "favourite_teams"
            ],
            id,
          ]
        : preferences[
            type === "sport" ? "favourite_sports" : "favourite_teams"
          ].filter((item: number) => item !== id),
    };

    updatePreferencesAction(PreferencesDispatch, updatedPreferences);
  };

  return (
    <div className='m-4'>
      <H3>Sports</H3>
      <hr className='my-2 border-stone-400' />
      <SportsPreferences
        sports={sports}
        preferences={preferences}
        updatePreferences={updatePreferences}
      />

      <H3>Teams</H3>
      <hr className='my-2 border-stone-400' />
      <TeamsPreferences
        teams={teams}
        preferences={preferences}
        updatePreferences={updatePreferences}
      />
    </div>
  );
}

export default UpdatePreferences;
