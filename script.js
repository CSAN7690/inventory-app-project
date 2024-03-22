function addBookToDisplay(book) {
    let bookDisplay = document.querySelector('.book-display');

    let bookItem = document.createElement('div');
    bookItem.className = 'book-item';

    bookItem, innerHTML = `
    <img class="book-item__image" src="${book.imageUrl}" alt="${book.title} cover" />
    <div class="book-item__details">
            <h2 class="book-item__title">${book.title}</h2>
            <p class="book-item__author">${book.author}</p>
            <p class="book-item__price">$${book.price}</p>
            <p class="book-item__stock">${book.stock ? 'In Stock' : 'Out of Stock'}</p>
        </div>
        <button class="book-item__remove-btn" type="button">🗑️ Remove</button>
    `;

    //Event listener for remove button
    const removeBtn = bookItem.querySelector('.book-item__remove-btn');
    removeBtn.addEventListener('click', () => {
        bookItem.remove();
    });

    bookDisplay.appendChild(bookItem);
}

// Event listener for form submission
document.getElementById('bookForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from the form inputs
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const imageUrl = document.getElementById('imageUrl').value;
    const price = document.getElementById('price').value;
    const stock = document.getElementById('stock').value === 'inStock';

    // Create a new book object
    const newBook = { title, author, imageUrl, price, stock };

    // Add the new book to the display
    addBookToDisplay(newBook);

    // Clear the form
    this.reset();
});