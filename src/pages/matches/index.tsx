import { MatchesProvider } from "@/context/matches/context";
import MatchList from "./MatchList";

function Matches() {
  return (
    <MatchesProvider>
      <div>
        <h1>Matches</h1>
        <MatchList />
      </div>
    </MatchesProvider>
  );
}

export default Matches;
