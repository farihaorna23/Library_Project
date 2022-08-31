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

// let titleValue = "";
// let authorValue = "";

class Library {
  constructor() {
    //do we need to create a constructor?
    this.bookCount = 0;
    this.books = [];
  }
  addBook() {
    let title = document.getElementById("title");
    let author = document.getElementById("author");
    let checkedBox = document.getElementById("read");
    let btn = document.getElementById("btn");
    let inputRow = document.getElementById("inputRow");

    let titleValue = "";
    let authorValue = "";

    btn.addEventListener("click", () => {
      titleValue = title.value;
      authorValue = author.value;
      let checkedValue = checkedBox.checked;
      console.log(titleValue, authorValue, checkedValue);
      let id = Math.random();
      let addBook = new Book(id, titleValue, authorValue, checkedValue);
      console.log(addBook);
      let newTitle = document.createElement("td");
      let newAuthor = document.createElement("td");
      let newCheckBox = document.createElement("td");
      newTitle.textContent = titleValue;
      newAuthor.textContent = authorValue;
      newCheckBox.innerHTML = `<input type="checkbox" checked disabled/>`;
      console.log(newTitle, newAuthor, newCheckBox);
      let newRow = document.createElement("tr");
      newRow.append(newTitle, newAuthor, newCheckBox);
      console.log(newRow);
      document.querySelector("tbody").insertBefore(newRow, inputRow);
      document.getElementById("title").value = "";
      document.getElementById("author").value = "";
    });

    //nothing shows up even if global scoped variable
    console.log(titleValue, authorValue);
  }
}

let lib = new Library();
lib.addBook();
