import { Preferences } from "@/context/preferences/types";
import { Team } from "@/context/teams/types";

type Props = {
  teams: Team[];
  preferences: Preferences;
  updatePreferences: (
    type: "sport" | "team",
    id: number,
    isChecked: boolean
  ) => void;
};

function TeamsPreferences(props: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const type = "team";
    const id = Number(event.target.name);
    const isChecked = event.target.checked;
    props.updatePreferences(type, id, isChecked);
  };
  return (
    <div className=''>
      {props.teams.map((team) => {
        return (
          <div key={team.id} className='mr-2'>
            <input
              type='checkbox'
              id={team.name}
              name={String(team.id)}
              checked={
                props.preferences.favourite_teams.includes(team.id)
                  ? true
                  : false
              }
              onChange={handleChange}
            />{" "}
            <label htmlFor={team.name}>{team.name}</label>
          </div>
        );
      })}
    </div>
  );
}

export default TeamsPreferences;
