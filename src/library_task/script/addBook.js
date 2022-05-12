const addBookButton = document.querySelector('.add_book_button');

const addBook = () => {
  document.querySelector('.modal').remove();
};

const modalWindow = () => {
  const div = document.createElement('div');
  div.className = 'modal';
  div.innerHTML = `
        <div class="modal-window">
            <h2>Add book</h2>
            <label>Title <input class="book-title" type="text"></label>
            <label>Author <input class="book-author" type="text"></label>
            <label>Добавьте обложку: <input class="book-img" type="file" accept="image/png, image/jpeg"></label>  
            <button class="new-book">Add</button>
        </div>
    `;
  document.querySelector('body').append(div);
  document.querySelector('.new-book').addEventListener('click', addBook);
};

addBookButton.addEventListener('click', modalWindow);
