import React from 'react';
import { FaSearch } from 'react-icons/fa';

export const Search = ({ propertiesData, setSearchValue, setProperties }) => {
  const getSearchValue = (e) => {
    e.preventDefault();
    // Get values from form
    let target = e.target;
    let search = target.search.value;
    setSearchValue(search);
    listProperties(search);
  }
  const listProperties = (searchingWord) => {
    // Make an array filtered by the search value
    const result = propertiesData.filter(property => property.title.toLowerCase().includes(searchingWord.toLowerCase()));
    // Change properties value
    // If ders no results, we display all the properties
    if (result.length <= 0) {
      setProperties(propertiesData);
    } else {
      setProperties(result);
    }
  }
  return (
    <form className="searchForm" onSubmit={getSearchValue}>
      <input type="text" name="search" className="search" placeholder='Search' />
      <button type="submit" className='submitSearch'><FaSearch /></button>
    </form>
  )
}
