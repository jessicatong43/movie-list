import React from 'react';

var MovieList = ({movieSelections}) => {
  return (
    <div>
      {movieSelections.map((movie) => {
        return <div className="movie">{movie.title}</div>
      })}
    </div>
  )
}

export default MovieList;