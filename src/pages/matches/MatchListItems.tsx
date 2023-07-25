import { useMatchesState } from "@/context/matches/context";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { useEffect } from "react";
// import { fetchSingleMatch } from "@/context/matches/actions";

function MatchListItems() {
  const { matches } = useMatchesState();

  return (
    <div className='flex gap-4 flex-wrap'>
      {matches.map((match) => {
        return (
          <div key={match.id}>
            <Card className='w-96'>
              <CardHeader>
                <CardTitle>
                  {match.teams[0].name} vs {match.teams[1].name}
                </CardTitle>
                <CardDescription>
                  {match.location} |{" "}
                  {new Date(match.endsAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  {match.teams[0].name} {match.score[match.teams[0].name]}
                </p>
                <p>
                  {match.teams[1].name} {match.score[match.teams[1].name]}
                </p>
              </CardContent>
              <CardFooter>
                <p>{match.sportName} </p>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default MatchListItems;
