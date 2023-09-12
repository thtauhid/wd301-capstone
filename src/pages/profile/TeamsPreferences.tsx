import { Preferences } from "@/context/preferences/types";
import { fetchTeams } from "@/context/teams/actions";
import { useTeamsDispatch, useTeamsState } from "@/context/teams/context";
import { useEffect } from "react";

type Props = {
  favourite_teams: Preferences["favourite_teams"];
};

function TeamsPreferences(props: Props) {
  const TeamsDispatch = useTeamsDispatch();
  const { teams } = useTeamsState();

  useEffect(() => {
    fetchTeams(TeamsDispatch);
  }, [TeamsDispatch]);

  return (
    <div className=''>
      {teams.map((team) => {
        return (
          <div key={team.id} className='mr-2'>
            <input
              type='checkbox'
              id={team.name}
              name={team.name}
              checked={props.favourite_teams.includes(team.id)}
            />{" "}
            <label htmlFor={team.name}>{team.name}</label>
          </div>
        );
      })}
    </div>
  );
}

export default TeamsPreferences;
