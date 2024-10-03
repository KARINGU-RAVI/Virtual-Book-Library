import React, { useState } from 'react';
import './index.css';   // Component-specific styles

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search books by title, author, or genre"
      />
    </div>
  );
}

export default SearchBar;
