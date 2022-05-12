import { books } from './bd.js';
import { renderItems } from './generateCards.js';

const button = document.getElementById('most_popular');

const generatePopular = () => {
  const result = [];
  console.log(result);

  for (let i = 0; i < books.length; i += 1) {
    if (books[i].stars >= 5) {
      result.push(books[i]);
    }
  }

  document.querySelector('.books_inner').innerHTML = '';
  renderItems(result);
};

const refreshButton = (e) => {
  const target = e.target;
  const allBooks = document.getElementById('all_books');

  if (!target.classList.contains('filter_onclick')) {
    allBooks.classList.remove('filter_onclick');
    target.classList.add('filter_onclick');
    generatePopular();
  } else {
    target.classList.remove('filter_onclick');
    allBooks.classList.add('filter_onclick');
    document.querySelector('.books_inner').innerHTML = '';
    renderItems(books);
  }
};

button.addEventListener('click', refreshButton);
