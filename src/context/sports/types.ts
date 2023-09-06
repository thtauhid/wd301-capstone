export interface Sport {
  id: number;
  name: string;
}

export interface SportsState {
  sports: Sport[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
  selectedSport?: number;
}

export type SportsActions =
  | { type: "FETCH_SPORTS_REQUEST" }
  | { type: "FETCH_SPORTS_SUCCESS"; payload: Sport[] }
  | { type: "FETCH_SPORTS_FAILURE"; payload: string }
  | { type: "SELECT_SPORT"; payload: number };

export type SportsDispatch = React.Dispatch<SportsActions>;
