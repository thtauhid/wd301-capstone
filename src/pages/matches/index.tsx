import { MatchesProvider } from "@/context/matches/context";
import MatchList from "./MatchList";
import { H2 } from "@/components/ui/heading";

function Matches() {
  return (
    <MatchesProvider>
      <div>
        <H2>Matches</H2>
        <MatchList />
      </div>
    </MatchesProvider>
  );
}

export default Matches;
