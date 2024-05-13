import { getFollowersAndFollowing } from "../../localStorage/getValue/getFollowInfo.mjs";

export async function displayFollowers(user) {
  const { followers, following } = await getFollowersAndFollowing(user);
  const container = document.querySelector(".content-container");

  followers.forEach((follower) => {
    const followerElement = document.createElement("div");
    followerElement.textContent = follower.name;
    container.append(followerElement);
  });
}
