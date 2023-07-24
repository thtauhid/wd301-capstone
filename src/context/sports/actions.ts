import { API_ENDPOINT } from "@/config/constants";
import { Sport, SportsDispatch } from "./types";

export const fetchSports = async (dispatch: SportsDispatch) => {
  try {
    dispatch({ type: "FETCH_SPORTS_REQUEST" });

    const response = await fetch(`${API_ENDPOINT}/sports`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const sports: Sport[] = data.sports;

    console.log("Sports fetched:", sports);

    dispatch({ type: "FETCH_SPORTS_SUCCESS", payload: sports });
  } catch (error) {
    console.log("Error fetching sports:", error);
    dispatch({
      type: "FETCH_SPORTS_FAILURE",
      payload: "Unable to load sports",
    });
  }
};
