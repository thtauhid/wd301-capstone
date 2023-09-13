import { API_ENDPOINT } from "@/config/constants";
import { PreferencesDispatch, PreferencesState } from "./types";
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

export const updatePreferences = async (
  dispatch: PreferencesDispatch,
  preferences: PreferencesState["preferences"]
) => {
  try {
    console.table(preferences);
    dispatch({ type: "UPDATE_PREFERENCES_REQUEST" });

    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ preferences }),
    });

    const { preferences: updatedPreferences } = await response.json();

    dispatch({
      type: "UPDATE_PREFERENCES_SUCCESS",
      payload: updatedPreferences,
    });
  } catch (error) {
    console.log("Error updating preferences:", error);
    dispatch({
      type: "UPDATE_PREFERENCES_FAILURE",
      payload: "Unable to update preferences",
    });
  }
};
