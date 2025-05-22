const allBooks =[
    {
    title: "Majid",
    author: "Aziz dadas",
    image: "film majid.jpg",
    alreadyRead: true
  },

   {
    title: "ana mashy ana ",
    author: "Aziz dadas",
    image: "ana mashy ana film.jpg",
    alreadyRead: true
  }

];

// . call section 
const section = document.querySelector(".listBooks");

// create div
for (let book of allBooks) {
  
  const bookDiv = document.createElement("div");

  // create title and actor
  const bookText = document.createElement("p");
  bookText.textContent = `${book.title} written by ${book.author}`;

  // create img
  const bookImg = document.createElement("img");
  bookImg.src = book.image;
  bookImg.style.width = "100px";

  // If the book is already read. Set the color of the book’s details to red.
  if (book.alreadyRead) {
    bookText.style.color = "red";
  }

  // Add ttile and img in div
  bookDiv.appendChild(bookText);
  bookDiv.appendChild(bookImg);

  // add div in section
  section.appendChild(bookDiv);
}
