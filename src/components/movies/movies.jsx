import React from "react";
import Actor from "../actor/actor";
import './movies.css';

const Movie = ({ title, poster, year, rating, director, genre, cast }) => {
  return (
    <>
      <div className="movie">
        <img src={`./assets/${poster}`} alt={title}></img>
        <div className="movieContent">
          <h2 className="movieTitle">{title}</h2>
          <div className="movieYear">Rok vydání: {year}</div>
          <div>{rating}</div>
          <div>Režie: {director}</div>
          <div>Žánr: {genre}</div>
          <div className="movieCast">
            <h3>V hlavních rolích</h3>
            {cast.map((actor) => (
              <Actor 
                key={actor.name} 
                name={actor.name} 
                as={actor.as} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
