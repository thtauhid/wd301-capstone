import { PreferencesProvider } from "@/context/preferences/context";
import UpdatePreferences from "./UpdatePreferences";
import { SportsProvider } from "@/context/sports/context";
import { TeamsProvider } from "@/context/teams/context";

function Preferences() {
  return (
    <PreferencesProvider>
      <SportsProvider>
        <TeamsProvider>
          <UpdatePreferences />
        </TeamsProvider>
      </SportsProvider>
    </PreferencesProvider>
  );
}

export default Preferences;
