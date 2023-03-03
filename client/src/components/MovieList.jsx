import React from 'react';

var MovieList = ({movies}) => {
  return (
    <div>
      {movies.map((movie) => {
        return <div className="movie">{movie.title}</div>
      })}
    </div>
  )
}

export default MovieList;