import { renderCards } from "../../render/renderCards.mjs";

const searchForm = document.querySelector(".search-bar");
const tagToFilter = "snapgo";
const feedContainer = document.querySelector(".feed-container");

export function searchFeed(posts) {
  searchForm.addEventListener("submit", event => {
    event.preventDefault();
    let searchInput = document.querySelector(".search-bar input").value.trim();
    const filteredPosts = posts.filter(post => post.tags.includes(tagToFilter) && post.title.includes(searchInput));
    feedContainer.innerHTML = "";
    renderCards(filteredPosts, feedContainer);
  });
}