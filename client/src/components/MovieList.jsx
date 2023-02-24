import React from 'react';

var MovieList = ({movieSelections}) => {
  return (
    <div>
      {movieSelections.map((el) => {
        return <div className="movie">{el.title}</div>
      })}
    </div>
  )
}

export default MovieList;