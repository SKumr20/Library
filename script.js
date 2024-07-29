const myLibrary = [];

let bookCount = 0;

function Book(title, author, pages, read, num) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.num = num;
}

function addBookToLibrary() { 
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read, ++bookCount);
    myLibrary.push(newBook);
    console.log(myLibrary);
}


function submit() {
    addBookToLibrary();
    displayBook();
}

// Create a fucntion to display books added to library

function displayBook() {
    const bookCards = document.getElementById('bookCard');
    bookCards.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookInfo = `SNo. ${book.num}, Title: ${book.title}, Author: ${book.author}, No. of Pages: ${book.pages}, Read: ${book.read ? 'Yes' : 'No'}`;
        
        const bookCard = document.createElement('div');
        bookCard.innerText = bookInfo;
        bookCards.appendChild(bookCard);

        // Create remove button
        const removebtn = document.createElement('button');
        removebtn.innerText = 'Remove';
        removebtn.onclick = () => {
            removeBook(index);
        }
        bookCard.appendChild(removebtn);
    });
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBook();
    bookCount--;
}
