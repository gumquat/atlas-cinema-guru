import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './navigation.css'
import Activity from '../Activity'
import Button from '../general/Button'
import { faHome, faStar, faClock, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivites] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  // useNavigate hook
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setIsCollapsed(prevState => !prevState);
  };

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
    <nav className='custom-sidebar'>
      <ul className="navigation">
        <li>
          <Button 
            label="Home" 
            icon={faHome} 
            onClick={() => setPage("Home")} 
            className={selected === "Home" ? "selected" : ""}
          />
        </li>
        <li>
          <Button 
            label="Favorites" 
            icon={faStar} 
            onClick={() => setPage("Favorites")} 
            className={selected === "Favorites" ? "selected" : ""}
          />
        </li>
        <li>
          <Button 
            label="Watch Later" 
            icon={faClock} 
            onClick={() => setPage("Watch Later")} 
            className={selected === "Watch Later" ? "selected" : ""}
          />
        </li>
      </ul>
      <ul className="activity">
        {activities.slice(0, 10).map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))}
      </ul>
    </nav>
  )
}

export default SideBar;