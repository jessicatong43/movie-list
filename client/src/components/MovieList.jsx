import React from 'react';

var MovieList = ({movies}) => {
  if (movies.length === 0) {
    return <div>No movies found</div>
  }
  return (
    <div>
      {movies.map((movie, index) => {
        return <div className="movie" key={index}>{movie.title}</div>
      })}
    </div>
  )
}

export default MovieList;