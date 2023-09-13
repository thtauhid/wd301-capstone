import { Preferences } from "@/context/preferences/types";
import { Sport } from "@/context/sports/types";

type Props = {
  sports: Sport[];
  preferences: Preferences;
  updatePreferences: (
    type: "sport" | "team",
    id: number,
    isChecked: boolean
  ) => void;
};

function SportsPreferences(props: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const type = "sport";
    const id = Number(event.target.name);
    const isChecked = event.target.checked;
    props.updatePreferences(type, id, isChecked);
  };

  return (
    <div className='my-4'>
      {props.sports.map((sport) => {
        return (
          <div key={sport.id} className='mr-2'>
            <input
              type='checkbox'
              id={sport.name}
              name={String(sport.id)}
              checked={
                props.preferences?.favourite_sports.includes(sport.id)
                  ? true
                  : false
              }
              onChange={handleChange}
            />{" "}
            <label htmlFor={sport.name}>{sport.name}</label>
          </div>
        );
      })}
    </div>
  );
}

export default SportsPreferences;
