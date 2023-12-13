import React from 'react';
import './Header.css';
import { ReactComponent as SearchIcon} from '../../assets/SearchIcon.svg'

const SearchBar = () => {
      
  return (
    <form className="searchForm">
      <input 
        className="searchInput"
        id="search"
        type="text"
        placeholder='Search'
      />
      <button>
        <SearchIcon />
      </button>
    </form>
  )
}

export default SearchBar
