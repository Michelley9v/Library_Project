console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");

const books = [
    {
        id: 1,
        title: "Name of the Wind",
        author: "Patrick Rothfuss",
        read: true,

},
];

class Book {
    contructor(id, title, author, read){
        this.id = id;
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
    console.log("AddBook");
    // Select the Inputs from the form -- title, author, and read
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const read = document.getElementById("read");
    //Increment book count property
    this.nextId++;
    // Create an instance from my Book class with the input values
    const newBook = new Book
    (this.nextId, 
    title.value, 
    author.value, 
    read.checked);
    
    //Push this new book instance into the books array
    this.books.push(newBook);
    // Select the table body
    const tbody = document.getElementById("tableBody")
    // Create new table row
    const newTr = document.createElement("tr")
    newTr.classList.add(newBook.id);
    newTr.addEventListener("dbclick", () => {
     this.removeBook(newBook.id);

    });
    //Create three new table data cells
    const newTitle = document.createElement("td")
    const newAuthor = document.createElement("td")
    const newRead = document.createElement("td")
    // Add text content to td's with book values
    newTitle.textContent = title.value;
    newAuthor.textContent = author.value;
    const newCheckbox = document.createElement("input")
    newCheckbox.classList.add(newBook.id); 
    newCheckbox.type = "checkbox";
    newCheckbox.checked = read.checked;
    newCheckbox.disabled = read.checked;
    newCheckbox.addEventListener("click",(event)=>{
       this.markRead(event.target, newBook.id);
    });
    newRead.appendChild(newCheckbox);
    //Append the td's to the tr
    newTr.appendChild(newTitle,);
    newTr.appendChild(newAuthor);
    newTr.appendChild(newRead);
    //Append the tr to the body
    tbody.appendChild(newTr);
}

markRead(checkbox, id) {
this.books.forEach((book) => {
  if (id === book.id) {
    book.read = true;
    checkbox.disabled = true;
   }       
  });
 }

 removeBook(bookId){
    //Reassign the books array filtering out thr remove book
    this.books = this.books.filter(({id}) => bookId !== id);
    // Remove the book from the DOM 
    const tbody = document.getElementById("tableBody");
    tbody.removeChild(document.getElementById(bookId));
 }
}

const library = new Library(books);

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    library.addBook();
});