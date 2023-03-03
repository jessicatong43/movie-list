import React from 'react';
const { useState } = React;

var AddMovies = ({allMovies, setAllMovies, setMovies}) => {

  const [movieToAdd, setMovieToAdd] = useState('');

  var handleChange = (e) => {
    e.preventDefault();
    setMovieToAdd({title: e.target.value});
  };

  var handleSubmit = (e) => {
    e.preventDefault();
    if (movieToAdd === '') {
      return;
    }

    setAllMovies([...allMovies, { title: e.target[0].value }]);
    setMovies([...allMovies, { title: e.target[0].value }]);

    setMovieToAdd('');
    document.getElementById('addMovieInput').value = '';
    // window.alert('Movie added!');

  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id="addMovieInput" onChange={handleChange} />
      <button>Add Movie</button>
    </form>
  )
};

export default AddMovies;