import React from 'react';
const { useState } = React;

var AddMovies = ({allMovies, setAllMovies}) => {

  const [movieToAdd, setMovieToAdd] = useState('');

  var handleChange = (e) => {
    e.preventDefault();
    // console.log('allMovies: ', allMovies);
    var newAddedMovies = allMovies.slice();
    newAddedMovies.push({title: e.target.value});
    setMovieToAdd(newAddedMovies)
  };

  var handleClick = (e) => {
    e.preventDefault();
    setAllMovies(movieToAdd);
  };

  return (
    <div>
      <input type="text" id="addMovieInput" onChange={handleChange} />
      <button onClick={handleClick}>Add Movie</button>
    </div>
  )
};

export default AddMovies;