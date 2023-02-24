import React from 'react';
const { useState } = React;

var AddMovies = ({allMovies, setAddedMovies}) => {

  const [movieToAdd, setMovieToAdd] = useState('');

  var handleChange = (e) => {
    e.preventDefault();
    console.log('allMovies: ', allMovies);
    var newAddedMovies = allMovies.slice();
    newAddedMovies.push({title: e.target.value});
    setMovieToAdd(newAddedMovies)
  };

  var handleClick = (e) => {
    e.preventDefault();
    setAddedMovies(movieToAdd);
  };

  return (
    <div>
      <input type="text" id="addMovieInput" onChange={handleChange} />
      <button onClick={handleClick}>Add Movie</button>
    </div>
  )
};

export default AddMovies;