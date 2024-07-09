import React, { useState, useEffect } from 'react';
import './movies.css';
import axios from 'axios';
import placeholderImage from '../../assets/logo192.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock, faClockFour, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const accessToken = localStorage.getItem('accessToken');
  const header = {
    headers: { Authorization: `Bearer ${accessToken}`}
};

  useEffect(() => {
    const checkStatus = async () => {
      try {
        // Favorite
        const responseFavorite = await axios.get(`http://localhost:8000/api/titles/favorite/`, header);
        setIsFavorite(responseFavorite.data.some(fav => fav.imdbId === movie.imdbId));

        // Watch Later
        const responseWatchLater = await axios.get(`http://localhost:8000/api/titles/watchlater/`, header);
        setIsWatchLater(responseWatchLater.data.some(wl => wl.imdbId === movie.imdbId));
      } catch (error) {
        console.error('Error fetching movie status:', error);
      }
    };
    checkStatus();
  }, [movie.imdbID, accessToken]);

  const handleClick = async (type) => {
    const endpoint = `http://localhost:8000/api/titles/${type}/${movie.imdbID}`;
    try {
      if ((type === 'favorite' && !isFavorite) || (type === 'watchlater' && !isWatchLater)) {
        await axios.post(endpoint, {}, header);
      } else {
        await axios.delete(endpoint, header);
      }

      if (type === 'favorite') {
        setIsFavorite(!isFavorite);
      } else if (type === 'watchlater') {
        setIsWatchLater(!isWatchLater);
      }
    } catch (error) {
      console.error(`Error updating ${type} status:`, error);
    }
  };

  return (
    <li className="movie-card">
      <div className="card-header">
        <div className="action-icons">
          <FontAwesomeIcon 
            icon={faStar} 
            onClick={() => handleClick('favorite')} 
            className={isFavorite ? 'favorite' : ''}
          />
          <FontAwesomeIcon 
            icon={faClock} 
            onClick={() => handleClick('watchlater')} 
            className={isWatchLater ? 'watch-later' : ''}
          />
        </div>
      </div>
      <div className="movie-image">
        <img src={movie.imageUrl} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>{movie.synopsis}</p>
        <ul className="genres">
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}


export default MovieCard;