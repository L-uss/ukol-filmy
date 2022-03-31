import React from "react";
import Movie from "../movies/movies";
import './list.css'

const MovieList = ({ movies }) => {
  return (
    <div className="movieList">
      {movies.map((movie) => (
        <Movie
          key={movie.title}
          title={movie.title}
          poster={movie.poster}
          year={movie.year}
          rating={movie.rating}
          director={movie.director}
          genre={movie.genre}
          cast={movie.cast}
        />
      ))}
    </div>
  );
};

export default MovieList;
