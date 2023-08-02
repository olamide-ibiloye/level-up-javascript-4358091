// Write your code here

class Book {
  constructor(title, author, ISBN, numCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.numCopies = numCopies;
  }

  get availability() {
    return this.getAvailability();
  }

  getAvailability() {
    if (this.numCopies === 0) {
      return "out of stock";
    }

    if (this.numCopies < 10) {
      return "low stock";
    }

    return "in stock";
  }

  sell(numSold = 1) {
    return this.numCopies -= numSold;
  }

  restock(numCopies = 5) {
    return this.numCopies += numCopies;
  }
}

const newBook = new Book(
  (title = "The Land of the Living"),
  (author = "Johnny Man"),
  (ISBN = "AJK63836yt47"),
  (numCopies = 20)
);
