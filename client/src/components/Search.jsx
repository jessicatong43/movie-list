import React from 'react';
const { useState } = React;

// 4. Search takes full protected movie list and setState for alterable movie list
var Search = ({allMovies, setMovies}) => {

  // 5. Create a variable to store search query
  const [search, setSearch] = useState('');

  // 7. handleChange takes in user's event of typing
  var handleChange = (e) => {
    console.log('e.target.value: ', e.target.value);
    e.preventDefault();
    // 8. Set search query's state to user input
    setSearch(e.target.value.toLowerCase());
  }

  // move this to App so that you don't have to keep passing the state variables around
  // 9. handleClick sets alterable list of movies to a filtered list of movies that include search query
  var handleClick = (e) => {
    e.preventDefault();
    if (search === '') {
      setMovies(allMovies);
    }
    var result = allMovies.filter(movie => movie.title.toLowerCase().includes(search));
    setMovies(result);
  }

    return (
      <form>
        {/* 6. When user types in search bar, it calls handleChange */}
        <input type="search" id="searchbar" onChange={handleChange} />
        <button onClick={handleClick}>Search</button>
      </form>
    );
};

export default Search;