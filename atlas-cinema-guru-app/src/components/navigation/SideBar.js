import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './navigation.css'
import Activity from '../Activity'
// import Button from '../general/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivities] = useState(false);
  // side bar collapse state
  const [isCollapsed, setIsCollapsed] = useState(true);

  // useNavigate hook
  const navigate = useNavigate();

  // SIDEBAR HANDLING - COLLAPSE AND STATE
  const handleSidebarToggle = () => {
    setIsCollapsed(prevState => !prevState);
  };

  useEffect(() => {
    const updateSidebarPosition = () => {
      const headerElement = document.querySelector('.header-nav');
      const sidebarElement = document.querySelector('.sidebar');
      if (headerElement && sidebarElement) {
        sidebarElement.style.top = `${headerElement.offsetHeight}px`;
      }
    };

    updateSidebarPosition();
    window.addEventListener('resize', updateSidebarPosition);
    return () => {
      window.removeEventListener('resize', updateSidebarPosition);
    };
  }, []);

  // cleaned up the previous page setter to two lines using navigate()
  const setPage = (pageName) => {
    setSelected(pageName);
    navigate(`/${pageName}`);
  }

  // fixed retreival of activities from previous version
  const retrieveActivities = useCallback(async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const { data } = await axios.get('http://localhost:8000/api/activity', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setActivities(data.slice(0, 10));
      setShowActivities(true);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  }, []);

  useEffect(() => {
    retrieveActivities();
  }, [retrieveActivities]);

  return (
    <nav
      className={`sidebar ${isCollapsed ? '' : 'open'}`}
      onMouseEnter={handleSidebarToggle}
      onMouseLeave={handleSidebarToggle}
    >
      <ul className="navigation-menu">
        <li
          className={`nav-item ${selected === 'home' ? 'selected' : ''}`}
          onClick={() => setPage('home')}
        >
          <FontAwesomeIcon className="fa-icon" icon={faHome} />
          {!isCollapsed && <span>Home</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
        <li
          className={`nav-item ${selected === 'favorites' ? 'selected' : ''}`}
          onClick={() => setPage('favorites')}
        >
          <FontAwesomeIcon className="fa-icon" icon={faStar} />
          {!isCollapsed && <span>Favorites</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
        <li
          className={`nav-item ${selected === 'watchlater' ? 'selected' : ''}`}
          onClick={() => setPage('watchlater')}
        >
          <FontAwesomeIcon className="fa-icon" icon={faClock} />
          {!isCollapsed && <span>Watch Later</span>}
          <FontAwesomeIcon className="arrow-icon" icon={faArrowRight} />
        </li>
      </ul>
      <div className="activities-container">
        <h2 className="activities-title">Latest Activities</h2>
        {showActivities && activities.length > 0 && (
          <ul className="activity-list">
            {activities.map((activity, idx) => (
              <Activity
                key={idx}
                userUsername={activity.userUsername}
                title={activity.title}
                date={activity.date}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default SideBar;