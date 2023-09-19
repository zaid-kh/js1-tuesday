const book = {
  isbn: 213136,
  title: "The Martian",
  year: 1992,
  author: {
    name: "bob",
    dob: 4 - 12 - 1920,
  },
};
function bookDetails(book) {
  console.log(
    "The book " +
      book.title +
      " was written by " +
      book.author.name +
      " in the year " +
      book.year
  );
}
console.log("Hello");
bookDetails(book);
