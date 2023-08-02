// Write your code here

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
}

const newMovie = new Movie(
  (title = "Legend of the Seeker"),
  (director = "Van Gogh"),
  (genre = "Thriller"),
  (releaseYear = 2002),
  (rating = 4.8)
);

console.log(newMovie.getOverview());