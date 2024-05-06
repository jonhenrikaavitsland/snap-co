import { renderError } from "../../errorHandling/renderError.mjs";
import { save } from "../../localStorage/save.mjs";
import { setUserSession } from "../../localStorage/session/setUserSession.mjs";
import { API_AUIH, API_BASE, API_LOGIN } from "./constants.mjs";

/**
 * Function to log in to the API.
 *
 * @param {string} email
 * @param {string} password
 * @returns AccessToken and profile which is then stored to local storage.
 */
export async function loginUser(email, password) {
  const response = await fetch(`${API_BASE}${API_AUIH}${API_LOGIN}`, {
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { accessToken, ...profile } = (await response.json()).data;
    setUserSession(accessToken, profile);
    return profile;
  }
  const errorParent = document.querySelector(".error-parent");
  renderError(response.status, errorParent);
  throw new Error(response.status);
}
