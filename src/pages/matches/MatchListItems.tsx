import { useMatchesDispatch, useMatchesState } from "@/context/matches/context";
import { H3 } from "@/components/ui/heading";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { refreshMatch } from "@/context/matches/actions";
import { usePreferencesState } from "@/context/preferences/context";
import { useUserState } from "@/context/auth/context";

function MatchListItems() {
  const { user, isLoading: userIsLoading } = useUserState();
  const { preferences, isLoading: preferenceIsLoading } = usePreferencesState();
  const { matches: allMatches, isLoading: matchesIsLoading } =
    useMatchesState();

  // check if users preffered teams are playing matches and filter them
  const matches = user
    ? allMatches.filter((match) => {
        return preferences?.favourite_teams.filter((team) => {
          return match.teams.find((t) => t.id === team);
        }).length;
      })
    : allMatches;

  const matchesDispatch = useMatchesDispatch();

  const refreshMatchDetails = (id: number) => {
    refreshMatch(matchesDispatch, id);
  };

  if (userIsLoading || preferenceIsLoading || matchesIsLoading) {
    return <p className='p-4'>Loading...</p>;
  }

  return (
    <div className='flex gap-4 flex-wrap'>
      {matches.map((match) => {
        return (
          <div key={match.id} className='m-4 p-4 border w-96'>
            <div className='flex justify-between items-center'>
              <H3>
                {match.teams[0].name} vs {match.teams[1].name}
              </H3>
              <button onClick={() => refreshMatchDetails(match.id)}>
                <ArrowPathIcon className='h-6 w-6' />
              </button>
            </div>
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

      {matches.length === 0 && (
        <div className=' p-4  w-96'>
          <p>No running match found</p>
        </div>
      )}
    </div>
  );
}

export default MatchListItems;
