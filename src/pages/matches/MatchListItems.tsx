import { useMatchesState } from "@/context/matches/context";
import { H3 } from "@/components/ui/heading";

function MatchListItems() {
  const { matches } = useMatchesState();

  return (
    <div className='flex gap-4 flex-wrap'>
      {matches.map((match) => {
        return (
          <div key={match.id} className='m-4 p-4 border w-96'>
            <H3>
              {match.teams[0].name} vs {match.teams[1].name}
            </H3>
            <p className='font-mono'>{match.location}</p>
            <div className='my-4 font-bold text-2xl'>
              <p>
                {match.teams[0].name} {match.score[match.teams[0].name]}
              </p>
              <p>
                {match.teams[1].name} {match.score[match.teams[1].name]}
              </p>
            </div>
            <p>
              {match.sportName} | {new Date(match.endsAt).toLocaleDateString()}
            </p>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}

export default MatchListItems;
