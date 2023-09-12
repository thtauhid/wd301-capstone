import { API_ENDPOINT } from "@/config/constants";
import {
  // Preferences,
  PreferencesDispatch,
} from "./types";
import { getAuthToken } from "@/utils/auth";

const token = getAuthToken();

export const fetchPreferences = async (dispatch: PreferencesDispatch) => {
  try {
    dispatch({ type: "FETCH_PREFERENCES_REQUEST" });

    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    const { preferences } = await response.json();

    console.log(preferences);

    dispatch({ type: "FETCH_PREFERENCES_SUCCESS", payload: preferences });
  } catch (error) {
    console.log("Error fetching preferences:", error);
    dispatch({
      type: "FETCH_PREFERENCES_FAILURE",
      payload: "Unable to load preferences",
    });
  }
};
