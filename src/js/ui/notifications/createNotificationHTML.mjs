import { pageRedirect } from "../../data/pageRedirect.mjs";

/**
 * Receives a object containing the current changes to comments and  reactions.
 * Creates the html element to display when notifications are clicked.
 * @param {object} changes 
 * @returns a html element to be displayed.
 */
export function createNotificationHTML(changes) {
  const element = document.createElement("div");

  if (changes.followers) {
    const followersWrap = document.createElement("div");
    followersWrap.classList.add("p-2");

    const followers = document.createElement("p");
    followers.textContent = `You have ${changes.followers} new followers!`;
    followersWrap.append(followers);

    element.append(followersWrap);
  }

  if (changes.posts) {
    changes.posts.forEach(post => {
      const postWrap = document.createElement("div");
      postWrap.classList.add("p-2", "custom-cursor");
      postWrap.addEventListener("click", () => {
        pageRedirect(`/feed/post/?id=${post.id}`);
      });

      const postElement = document.createElement("p");
      postElement.textContent = `This post has ${post.comments || post.reactions} new interactions!`;
      postWrap.append(postElement);

      element.append(postWrap);
    });
  }
  return element;
}
