import { books } from './bd.js';

export const generateStars = (value, id) => {
  const item = document.getElementById(id);
  const starContainer = item.querySelector('.stars');

  for (let i = 1; i <= value; i += 1) {
    starContainer.querySelector(`.star${i}`).classList.add('active');
  }
};

export const generator = (id, src, bookName, author, stars) => {
  const booksContainer = document.querySelector('.books_inner');
  const book = document.createElement('div');

  book.innerHTML = `
    <img src="${src}" alt="image" />
    <h1>${bookName}</h1>
    <h2>${author}</h2>
    <div class="stars">
    <span class="star1"></span>
    <span class="star2"></span>
    <span class="star3"></span>
    <span class="star4"></span>
    <span class="star5"></span>
    </div>
    `;

  book.className = 'book_item';
  book.setAttribute('id', `${id}`);
  booksContainer.appendChild(book);
  generateStars(stars, id);
};

export const renderItems = (content) => {
  content.map((item) => generator(item.id, item.src, item.bookName, item.author, item.stars));
};

renderItems(books);
