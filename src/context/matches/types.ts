export interface Match {
  id: number;
  name: string;
  location: string;
  sportName: string;
  endsAt: string;
}

export interface MatchesState {
  matches: Match[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type MatchesActions =
  | { type: "FETCH_MATCHES_REQUEST" }
  | { type: "FETCH_MATCHES_SUCCESS"; payload: Match[] }
  | { type: "FETCH_MATCHES_FAILURE"; payload: string };

export type MatchesDispatch = React.Dispatch<MatchesActions>;
