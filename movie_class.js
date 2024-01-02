class Movie {
    //Creating a constructor for the class
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    //function to get an array of movies which have rating as PG
    //If we dont use static keyword here we need to use instance when we call the method
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

//Creating an new instance for the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

//Sample movies for getPG method
const sampleMovies = [
    new Movie("Movie1", "Studio1"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3","PG"),
    new Movie("Movie4", "Studio4", "PG-12")
];

const ratedPG = Movie.getPG(sampleMovies);
console.log(ratedPG);