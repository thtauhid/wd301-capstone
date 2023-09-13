import { MatchesProvider } from "@/context/matches/context";
import MatchList from "./MatchList";
import { H2 } from "@/components/ui/heading";
import { PreferencesProvider } from "@/context/preferences/context";

function Matches() {
  return (
    <PreferencesProvider>
      <MatchesProvider>
        <div>
          <H2>Matches</H2>
          <MatchList />
        </div>
      </MatchesProvider>
    </PreferencesProvider>
  );
}

export default Matches;
