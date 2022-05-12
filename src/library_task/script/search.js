import { books } from './bd.js';
import { renderItems } from './generateCards.js';

const input = document.querySelector('.search');

const userInput = () => {
  const userData = input.value;
  const regexp = new RegExp(`${userData}`, 'i');
  const data = [];

  for (let i = 0; i < books.length; i += 1) {
    if (regexp.test(`${books[i].bookName}`)) {
      data.push(books[i]);
    }
  }

  document.querySelector('.books_inner').innerHTML = '';
  renderItems(data);
};

input.addEventListener('input', userInput);
