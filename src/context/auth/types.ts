import { Preferences } from "../preferences/types";

export interface User {
  id: number;
  name: string;
  email: string;
  preferences: Preferences;
}

export interface UserState {
  user?: User;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export type UserActions =
  | { type: "FETCH_USER_REQUEST" }
  | { type: "FETCH_USER_SUCCESS"; payload: User }
  | { type: "FETCH_USER_FAILURE"; payload: string }
  | { type: "LOGOUT_USER" };

export type UserDispatch = React.Dispatch<UserActions>;
