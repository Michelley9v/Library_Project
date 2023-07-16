console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
    {
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,

},
];

class Book {
    contructor(title, author, read){
        this.title = title;
        this.author = author;
        this.read = read
    }
}

class Library{
    contractor(books){
        this.bookcount = books.lenght;
        this.books = books;
    }
addBook() {
    console.log("AddBook")
    // Select the Inputs from the form -- title, author, and read
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const read = document.getElementById("read");
    // Create an instance from my Book class with the input values
    const newBook = new Book(title.value, author.value, read.checked);
    //Push this new book instance into the books array
    this.books.push(newBook);
    //Increment book count property
    this.bookCount++;

    console.log(this.books, this.bookCount);

    // Select the table body
    const tbody = document.getElementById("tableBody")
    // Create new table row
    const newTr = document.createElement("tr")
    //Create three new table data cells
    const newTitle = document.createElement("td")
    const newAuthor = document.createElement("td")
    const newRead = document.createElement("td")
    // Add text content to td's with book values
    newTitle.textContent = title.value;
    newAuthor.textContent = author.value;
    const newCheckbox = document.createElement("input")
    newCheckbox.type = "checkbox";
    newCheckbox.checked = read.checked;
    newCheckbox.disabled = read.checked;
    newRead.appendChild(newCheckbox);
    //Append the id's to the tr
    newTr.appendChild(newTitle,);
    newTr.appendChild(newAuthor);
    newTr.appendChild(newRead);
    //Append the tr to the body
    tbody.appendChild(newTr);
}

markRead(checkbox, id) {
 this.books.forEach((book) => {
  if (id === book.id) {
    book.read + true;
    checkbox.checked = true;
    checkbox.disabled = true;
   }       
  });
 }
}

const library = new Library(books)

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault;
     library.addbook();
});