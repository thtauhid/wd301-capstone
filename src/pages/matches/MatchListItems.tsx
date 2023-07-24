import { useMatchesState } from "@/context/matches/context";

function MatchListItems() {
  const { matches } = useMatchesState();
  return (
    <div>
      {matches.map((article) => {
        return <div key={article.id}>{article.name}</div>;
      })}
    </div>
  );
}

export default MatchListItems;
