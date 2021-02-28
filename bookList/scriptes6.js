// Book class constructor

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
// UI methods

class UI {
  // Add Book
  addBookToList(book) {
    const listEL = document.getElementById('book-list');

    const rowEL = document.createElement('tr');

    rowEL.innerHTML = `<td>${book.title}</td>
                       <td>${book.author}</td>
                       <td>${book.isbn}</td>
                       <td><a href="#" class="delete">X</a></td>`;
    listEL.appendChild(rowEL);
  }
  // Show Alert
  showAlert(message, className) {
    const div = document.createElement('div');

    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector('.alert').remove();
    }, 3000);
  }
  // Delete Book
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }
  // Clear Feilds
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Event listener for add book

document.getElementById('book-form').addEventListener('submit', function (e) {
  // Get form values
  const titleEL = document.getElementById('title').value;
  const authorEL = document.getElementById('author').value;
  const isbnEL = document.getElementById('isbn').value;
  // Instantiate Book
  const book = new Book(titleEL, authorEL, isbnEL);
  // Instantiate UI
  const ui = new UI();
  // Validate
  if (titleEL === '' || authorEL === '' || isbnEL === '') {
    // error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add book to list
    ui.addBookToList(book);
    // Show success
    ui.showAlert('Book Added!', 'success');
    // Clear feilds
    ui.clearFields();
  }
  e.preventDefault();
});
// Event listener for delete
document.getElementById('book-list').addEventListener('click', function (e) {
  const ui = new UI();
  ui.deleteBook(e.target);
  // show alert
  ui.showAlert('Book removed', 'success');
  e.preventDefault();
});
