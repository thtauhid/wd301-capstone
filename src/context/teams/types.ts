export interface Team {
  id: number;
  name: string;
  plays: string;
}

export interface TeamsState {
  teams: Team[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type TeamsActions =
  | { type: "FETCH_TEAMS_REQUEST" }
  | { type: "FETCH_TEAMS_SUCCESS"; payload: Team[] }
  | { type: "FETCH_TEAMS_FAILURE"; payload: string };

export type TeamsDispatch = React.Dispatch<TeamsActions>;
