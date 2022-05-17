import { generateStars } from './generateCards.js';

const changeRating = (e) => {
  const target = e.target;
  const starValue = target.className.split('')[4];
  const allStars = target.parentNode;
  if (allStars.className === 'stars') {
    allStars.innerHTML = `
    <span class="star1"></span>
    <span class="star2"></span>
    <span class="star3"></span>
    <span class="star4"></span>
    <span class="star5"></span>
    `;
    const id = allStars.parentNode.id;
    generateStars(starValue, id);
  }
};

document.querySelector('.books_inner').addEventListener('click', changeRating);
