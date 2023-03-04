import React from 'react';
import Axios from 'axios';
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

    Axios.post('/api/movies', movieToAdd);
    // Axios example from Jake:
    // axios({
    //   method: 'get',
    //   url: `https://api.themoviedb.org/3/search/movie?api_key=14eb889b2c6d82830f259f319d6d1a55&query=${query}&page=1&include_adult=false`
    // })
    //   .then((response) => {
    //     setMovieData([...movieData, { title: query, watched: 'TOWATCH', viewInfo: false, infoObj: response.data.results[0] }]);
    //     return;
    //   });

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