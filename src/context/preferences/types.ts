export interface Preferences {
  favourite_sports: number[];
  favourite_teams: number[];
}

export interface PreferencesState {
  preferences: Preferences;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type PreferencesActions =
  | { type: "FETCH_PREFERENCES_REQUEST" }
  | { type: "FETCH_PREFERENCES_SUCCESS"; payload: Preferences }
  | { type: "FETCH_PREFERENCES_FAILURE"; payload: string };

export type PreferencesDispatch = React.Dispatch<PreferencesActions>;
