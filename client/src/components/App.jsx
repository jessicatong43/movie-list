import React from 'react';
import MovieList from './MovieList.jsx';
import movieSelections from './movieSelections.jsx';
import Search from './Search.jsx';
import AddMovies from './AddMovies.jsx';
const { useState } = React;

const App = (props) => {

  // 1. Create a protected list of movies
  const [allMovies, setAllMovies] = useState(movieSelections);
  // 2. Create a state for altering the movie list
  const [movies, setMovies] = useState(movieSelections);
  // const [addedMovies, setAddedMovies] = useState([]);


  return (
    <div>
      <div id="mainBox">
        <h2 className="title">Movie List</h2>
        <div id="search">
          {/* 3. Pass full protected movie list and setState for alterable list into search */}
          <Search setMovies={setMovies} allMovies={allMovies}/>
        </div>
        <div id="addMovie">
          <AddMovies allMovies={allMovies} setAllMovies={setAllMovies} setMovies={setMovies} />
        </div>
        <div className="movieList">
          {/* 10. MovieList renders the movies filtered from search */}
          <MovieList movies={movies} />
        </div>
      </div>
    </div>
  )

};

export default App;