import { postsWithTagsChunks } from "../../data/posts.mjs";
import { renderCards } from "../../render/renderCards.mjs";
import { viewMoreBtn } from "./viewMoreBtn.mjs";

/**
 * Decides what should happen when the button is pressed
 * @param {array} array 
 * @param {string} classname 
 * @param {string} parent 
 * @param {string} btnText 
 * @param {string} btnTheme 
 * When clicked, saving the number of arrays to load in. 
 * Then renders posts based on the number of arrays. 
 * Then as long as the number of arrays is not maxed, renders the view more button.
 */
export function buttonAction(array, classname, parent, btnText, btnTheme) {
  let length = array.length;
  let currentPos = 1;
  const moreBtn = document.querySelector(`.${classname}`);

  moreBtn.addEventListener("click", function () {
    currentPos += 1;
    parent.innerHTML = "";
    for (let i = 0; i < currentPos; i++) {
      renderCards(postsWithTagsChunks[i], parent);
    }
    if (currentPos !== length) {
      viewMoreBtn(btnText, btnTheme, classname, parent);
    }
  });
}