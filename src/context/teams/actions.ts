import { API_ENDPOINT } from "@/config/constants";
import { Team, TeamsDispatch } from "./types";

export const fetchTeams = async (dispatch: TeamsDispatch) => {
  try {
    dispatch({ type: "FETCH_TEAMS_REQUEST" });

    const response = await fetch(`${API_ENDPOINT}/teams`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data: Team[] = await response.json();

    console.log({ data });

    dispatch({ type: "FETCH_TEAMS_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching teams:", error);
    dispatch({
      type: "FETCH_TEAMS_FAILURE",
      payload: "Unable to load teams",
    });
  }
};
