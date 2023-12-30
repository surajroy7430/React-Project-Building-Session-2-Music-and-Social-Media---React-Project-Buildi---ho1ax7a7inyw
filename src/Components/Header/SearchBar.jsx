import React from 'react';
import './Header.css';

const SearchBar = () => {
      
  return (
    <>
      <form className="searchForm">
        <input 
          className="searchInput"
          id="search"
          type="search"
          placeholder='Search'
        />
      </form>
    </>
  )
}

export default SearchBar
