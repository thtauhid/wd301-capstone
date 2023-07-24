export interface Sport {
  id: number;
  name: string;
}

export interface SportsState {
  sports: Sport[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type SportsActions =
  | { type: "FETCH_SPORTS_REQUEST" }
  | { type: "FETCH_SPORTS_SUCCESS"; payload: Sport[] }
  | { type: "FETCH_SPORTS_FAILURE"; payload: string };

export type SportsDispatch = React.Dispatch<SportsActions>;
