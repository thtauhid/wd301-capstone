import { API_ENDPOINT } from "@/config/constants";
import { Match, MatchesDispatch } from "./types";

export const fetchMatches = async (dispatch: MatchesDispatch) => {
  try {
    dispatch({ type: "FETCH_MATCHES_REQUEST" });

    const response = await fetch(`${API_ENDPOINT}/matches`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const matches: Match[] = data.matches;

    console.log({ matches });

    dispatch({ type: "FETCH_MATCHES_SUCCESS", payload: matches });
  } catch (error) {
    console.log("Error fetching matches:", error);
    dispatch({
      type: "FETCH_MATCHES_FAILURE",
      payload: "Unable to load matches",
    });
  }
};
