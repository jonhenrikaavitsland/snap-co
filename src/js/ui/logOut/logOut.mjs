import { pageRedirect } from "../../data/pageRedirect.mjs";

const logOutLink = document.querySelector(".nav-log-out");

export function logOut() {
  if (location.pathname === "/" || location.pathname === "/register/" || location.pathname === "/404/") {
    return;
  } else {
    logOutLink.addEventListener("click", () => {
      localStorage.clear();
      setTimeout(() => {
        pageRedirect("/");
      }, 1000);
    });
  }
}
