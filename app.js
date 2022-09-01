console.log("Hello World!\n==========\n");

// PROJECT Section
console.log("PROJECT:\n==========\n");
class Book {
  constructor(id, title, author, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

let title = document.getElementById("title");
let author = document.getElementById("author");
let checkedBox = document.getElementById("read");
let btn = document.getElementById("btn");
let inputRow = document.getElementById("inputRow");
let tableBody = document.querySelector("tbody");
let allRows = document.querySelectorAll("tr");
class Library {
  constructor() {
    //do we need to create a constructor?
    this.bookCount = 0;
    this.books = [];
  }

  updateBookList(book) {
    console.log("inside of the updateBookList");
    console.log(book);
  }

  addBook() {
    let titleValue = title.value;
    let authorValue = author.value;
    let checkedValue = checkedBox.checked;
    console.log(titleValue, authorValue, checkedValue);
    let id = Math.random();
    let addBook = new Book(id, titleValue, authorValue, checkedValue);
    console.log(addBook);
    //need to push it to the book array
    this.books.push(addBook);
    console.log(this.books);
    //update the dom
    this.updateBookList(addBook);
  }

  removeBook(id, row) {
    console.log(id);
    console.log(this.books);
    this.books = this.books.filter(book => book.id !== id);
    console.log(this.books);
    console.log(row);
    row.remove();
  }

  //recives one book obj
  updateBookList(obj) {
    console.log(obj); //but I had to pass this obj from addBook for updateBookList. This obj can't be accessed from anywhere. Because it is a local value.
    console.log(this.books); // i don't need to pass this.books as an argument. I can access them because they r the class proprty that can be accepted from anywhere.
    let newRow = document.createElement("tr");
    let newTitle = document.createElement("td");
    let newAuthor = document.createElement("td");
    let newCheckBox = document.createElement("td");
    let addButtonCol = document.createElement("td");
    let checkBox = document.createElement("input");
    let rmButtonCol = document.createElement("td");
    let removeBook = document.createElement("button");
    removeBook.textContent = "Remove Book";
    removeBook.addEventListener("click", () => this.removeBook(obj.id, newRow)); //passed by reference
    rmButtonCol.appendChild(removeBook);
    newTitle.textContent = obj.title;
    newAuthor.textContent = obj.author;
    checkBox.type = "checkbox";
    checkBox.checked = obj.read;
    checkBox.disabled = obj.read === true ? true : false;
    console.log(checkBox);
    checkBox.addEventListener("click", () => this.markRead(checkBox, obj.id));
    newCheckBox.append(checkBox);
    console.log(newTitle, newAuthor, newCheckBox);
    newRow.append(newTitle, newAuthor, newCheckBox, addButtonCol, rmButtonCol);
    console.log(newRow);
    document.querySelector("tbody").insertBefore(newRow, inputRow);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("read").checked = false;
  }

  markRead(checkBox, id) {
    console.log("Mark read is working!");
    console.log(checkBox);
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books.read = true;
        checkBox.checked = true;
        checkBox.disabled = true;
      }
    }
  }
}

let lib = new Library();

btn.addEventListener("click", () => {
  lib.addBook();
});
