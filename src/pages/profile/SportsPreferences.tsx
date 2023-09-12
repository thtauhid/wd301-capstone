import { useEffect } from "react";
import { fetchSports } from "@/context/sports/actions";
import { useSportsDispatch, useSportsState } from "@/context/sports/context";
import { Preferences } from "@/context/preferences/types";

type Props = {
  favourite_sports: Preferences["favourite_sports"];
};

function SportsPreferences(props: Props) {
  const SportsDispatch = useSportsDispatch();
  const { sports } = useSportsState();

  useEffect(() => {
    fetchSports(SportsDispatch);
  }, [SportsDispatch]);

  return (
    <div className='my-4'>
      {sports.map((sport) => {
        return (
          <div key={sport.id} className='mr-2'>
            <input
              type='checkbox'
              id={sport.name}
              name={sport.name}
              checked={props.favourite_sports.includes(sport.id)}
            />{" "}
            <label htmlFor={sport.name}>{sport.name}</label>
          </div>
        );
      })}
    </div>
  );
}

export default SportsPreferences;
