import { useEffect } from "react";
import { fetchPreferences } from "@/context/preferences/actions";
import {
  PreferencesProvider,
  usePreferencesDispatch,
  usePreferencesState,
} from "@/context/preferences/context";
import { TeamsProvider } from "@/context/teams/context";
import { SportsProvider } from "@/context/sports/context";
import { H3 } from "@/components/ui/heading";
import SportsPreferences from "./SportsPreferences";
import TeamsPreferences from "./TeamsPreferences";

function UpdatePreferences() {
  const PreferencesDispatch = usePreferencesDispatch();
  const { preferences } = usePreferencesState();

  useEffect(() => {
    fetchPreferences(PreferencesDispatch);
  }, [PreferencesDispatch]);

  return (
    <PreferencesProvider>
      <div className='m-4'>
        <H3>Sports</H3>
        <hr className='my-2 border-stone-400' />
        <SportsProvider>
          <SportsPreferences favourite_sports={preferences.favourite_sports} />
        </SportsProvider>

        <H3>Teams</H3>
        <hr className='my-2 border-stone-400' />
        <TeamsProvider>
          <TeamsPreferences favourite_teams={preferences.favourite_teams} />
        </TeamsProvider>
      </div>
    </PreferencesProvider>
  );
}

export default UpdatePreferences;
