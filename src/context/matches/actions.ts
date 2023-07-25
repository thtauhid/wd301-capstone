import { API_ENDPOINT } from "@/config/constants";
import { Match, MatchDetails, MatchesDispatch } from "./types";

const getRunningMatches = (matches: Match[]) => {
  const runningMatches = matches.filter((match) => {
    return new Date(match.endsAt) >= new Date();
  });

  return runningMatches;
};

const getMatchDetails = async (id: number) => {
  const response = await fetch(`${API_ENDPOINT}/matches/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data: MatchDetails = await response.json();

  return data;
};

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

    const runningMatches = getRunningMatches(matches);
    console.log({ runningMatches });

    const matchDetails = await Promise.all(
      runningMatches.map((match) => getMatchDetails(match.id))
    );

    console.log({ matchDetails });

    dispatch({ type: "FETCH_MATCHES_SUCCESS", payload: matchDetails });
  } catch (error) {
    console.log("Error fetching matches:", error);
    dispatch({
      type: "FETCH_MATCHES_FAILURE",
      payload: "Unable to load matches",
    });
  }
};

export const refreshMatch = async (dispatch: MatchesDispatch, id: number) => {
  try {
    const response = await fetch(`${API_ENDPOINT}/matches/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    const matchDetails: MatchDetails = data;
    console.log({ matchDetails });

    dispatch({ type: "REFRESH_MATCH_SUCCESS", payload: matchDetails });
  } catch (error) {
    console.log("Error fetching matches:", error);
    dispatch({
      type: "REFRESH_MATCH_FAILURE",
      payload: "Unable to load matches",
    });
  }
};
