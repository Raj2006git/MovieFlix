import React from 'react'

const Search = ({searchTerm, setsearchTerm}) => {
  return (
    <div className='search'>
      <img src="search.svg" alt="search" />

      <input type='text' placeholder='Search through thousands of movies' value={searchTerm} onChange={(event)=> setsearchTerm(event.target.value)}/>
    </div>
  )
}

export default Search
