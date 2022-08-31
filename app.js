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

  removeBook() {
    console.log("hello, remove book works!");
  }

  updateBookList(obj) {
    console.log(obj);
    let newTitle = document.createElement("td");
    let newAuthor = document.createElement("td");
    let newCheckBox = document.createElement("td");
    let addButtonCol = document.createElement("td");
    let rmButtonCol = document.createElement("td");
    let removeBook = document.createElement("button");
    removeBook.textContent = "Remove Book";
    removeBook.addEventListener("click", this.removeBook);
    rmButtonCol.appendChild(removeBook);
    newTitle.textContent = obj.title;
    newAuthor.textContent = obj.author;
    let isChecked = obj.read === true ? "checked" : "";
    newCheckBox.innerHTML = `<input type="checkbox" ${isChecked} disabled/>`;
    console.log(newTitle, newAuthor, newCheckBox);
    let newRow = document.createElement("tr");
    newRow.append(newTitle, newAuthor, newCheckBox, addButtonCol, rmButtonCol);
    console.log(newRow);
    document.querySelector("tbody").insertBefore(newRow, inputRow);
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
  }
}

let lib = new Library();

btn.addEventListener("click", () => {
  lib.addBook(lib.books, lib.bookCount, lib.updateBookList);
});
