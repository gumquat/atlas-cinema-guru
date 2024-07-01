import React from 'react';
import './general.css';

// ___PROPS___
// title: String – The controlled state
// setTitle: String – The setState function of the above state.
const SearchBar = ({ title, setTitle }) => {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input 
        type="text" 
        value={title} 
        onChange={handleInput} 
        className="search-bar-input"
        placeholder="Search..." 
      />
    </div>
  );
};

export default SearchBar;
