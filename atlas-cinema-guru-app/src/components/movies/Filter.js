import React from 'react'
import './movies.css'
import SearchBar from '../general/SearchBar.js'
import Tag from './Tag'

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, genres, setGenres, title, setTitle }) => {

  const allGenres = ['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy']

  return (
    <div className="filter-container">
      <div className="filter-left">
        <div className="filter-search">
          <SearchBar title={title} setTitle={setTitle} />
        </div>
        <div className="filter-controls">
          <input 
            type="number" 
            value={minYear} 
            onChange={(e) => setMinYear(Number(e.target.value))} 
            placeholder="Minimum Year"
          />
          <input 
            type="number" 
            value={maxYear} 
            onChange={(e) => setMaxYear(Number(e.target.value))} 
            placeholder="Maximum Year"
          />
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="highestrated">Highest Rated</option>
            <option value="lowestrated">Lowest Rated</option>
          </select>
        </div>
      </div>
      <div className="filter-right">
        <ul className="genre-list">
          {allGenres.map((genre) => (
            <Tag 
              key={genre} 
              genre={genre} 
              filter={true} 
              genres={genres} 
              setGenres={setGenres}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filter