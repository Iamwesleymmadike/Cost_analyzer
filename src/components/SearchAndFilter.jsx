import React from 'react';

const SearchAndFilters = () => (
  <div className="search-filters">
    <div className='searchFiltersContainer'>
    <input id="searchBox" type="text" placeholder="Search..." />
    <div className='checkBoxContainer'>
        <input type='checkbox' id="checkBox" name="checkBox"/>
        <label for="checkBox" className='checkBox-label'>Hide small costs</label>
    </div>

    <div className='filters'>
    <button><span class="icon">★</span>Watchlist</button>
    </div>
  </div>
  </div>
);

export default SearchAndFilters;
