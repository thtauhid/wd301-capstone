import { API_ENDPOINT } from "@/config/constants";
import { User, UserDispatch } from "./types";
import { getAuthToken } from "@/utils/auth";

const token = getAuthToken();

export const fetchUser = async (dispatch: UserDispatch) => {
  try {
    dispatch({ type: "FETCH_USER_REQUEST" });

    const response = await fetch(`${API_ENDPOINT}/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const data: User = await response.json();

    console.log({ user: data });

    dispatch({ type: "FETCH_USER_SUCCESS", payload: data });
  } catch (error) {
    console.log("Error fetching user:", error);

    dispatch({
      type: "FETCH_USER_FAILURE",
      payload: "Unable to load user",
    });
  }
};

export const logoutUser = async (dispatch: UserDispatch) => {
  dispatch({ type: "LOGOUT_USER" });
};
