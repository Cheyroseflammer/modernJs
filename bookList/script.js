// Book Constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor

function UI() {}

// Add Book to List

UI.prototype.addBookToList = function (book) {
  const listEL = document.getElementById('book-list');
  // Create an tr element
  const rowEL = document.createElement('tr');
  // Insert cols
  rowEL.innerHTML = `<td>${book.title}</td>
                     <td>${book.author}</td>
                     <td>${book.isbn}</td>
                     <td><a href="#" class="delete">X</a></td>`;
  listEL.appendChild(rowEL);
};

// Show Alert

UI.prototype.showAlert = function (message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert ${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get parent
  const container = document.querySelector('.container');
  // Get form
  const form = document.querySelector('#book-form');
  // Insert aler
  container.insertBefore(div, form);

  // Timeout function
  setTimeout(function () {
    document.querySelector('.alert').remove();
  }, 3000);
};

// Delete Boo

UI.prototype.deleteBook = function (target) {
  if (target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
};

// Clear fields

UI.prototype.clearFields = function () {
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
};

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