export interface Match {
  id: number;
  name: string;
  location: string;
  sportName: string;
  endsAt: string;
}

export interface MatchDetails {
  id: number;
  name: string;
  location: string;
  sportName: string;
  endsAt: string;
  isRunning: boolean;
  startsAt: string;
  score: {
    [key: string]: string;
  };
  teams: {
    id: number;
    name: string;
  }[];
  playingTeam: number;
  story: string;
}

export interface MatchesState {
  matches: MatchDetails[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type MatchesActions =
  | { type: "FETCH_MATCHES_REQUEST" }
  | { type: "FETCH_MATCHES_SUCCESS"; payload: MatchDetails[] }
  | { type: "FETCH_MATCHES_FAILURE"; payload: string }
  | { type: "REFRESH_MATCH_SUCCESS"; payload: MatchDetails }
  | { type: "REFRESH_MATCH_FAILURE"; payload: string };

export type MatchesDispatch = React.Dispatch<MatchesActions>;
