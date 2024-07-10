import React, { useState } from 'react'
import './movies.css'
import SearchBar from '../general/SearchBar.js'
import Tag from './Tag'
import Input from '../general/Input.js'
import SelectInput from '../general/SelectInput.js'

const Filter = ({ minYear, setMinYear, maxYear, setMaxYear, sort, setSort, title, setTitle }) => {

  const allGenres = ['action', 'drama', 'comedy', 'biography', 'romance', 'thriller', 'war', 'history', 'sport', 'sci-fi', 'documentary', 'crime', 'fantasy']

  // SelectInput Options
  const sortOptions = [
    { value: "latest", label: "Latest" },
    { value: "oldest", label: "Oldest" },
    { value: "highestrated", label: "Highest Rated" },
    { value: "lowestrated", label: "Lowest Rated" }
  ];

  const [genres, setGenres] = useState([]);

  return (
    <div className="filter-container">
      <div className="filter-search-row">
        <SearchBar title={title} setTitle={setTitle} />
      </div>
      <div className="filter-controls-row">
        <div className="filter-left">
          <Input 
            type="number" 
            value={minYear} 
            setValue={setMinYear} 
            inputAttributes={{ placeholder: "Minimum Year" }}
          />
          <Input 
            type="number" 
            value={maxYear} 
            setValue={setMaxYear} 
            inputAttributes={{ placeholder: "Maximum Year" }}
          />
          <SelectInput
            value={sort}
            setValue={setSort}
            options={sortOptions}
          />
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
    </div>
  )
}

export default Filter