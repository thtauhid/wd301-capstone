import { UserActions, UserState } from "./types";

export const initialState: UserState = {
  user: undefined,
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export const userReducer = (
  state: UserState = initialState,
  action: UserActions
): UserState => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        isLoading: true,
      };

    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };

    case "FETCH_USER_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };

    case "LOGOUT_USER":
      return {
        ...state,
        user: undefined,
      };

    default:
      return state;
  }
};
