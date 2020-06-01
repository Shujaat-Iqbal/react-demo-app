// React Import
import React from 'react';

// Styles Import
import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input className='search'
         type='search'
         placeholder={placeholder}
         onChange={handleChange}
  />
);
