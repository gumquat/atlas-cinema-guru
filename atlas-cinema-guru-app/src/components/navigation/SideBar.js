import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './navigation.css'
import Activity from '../Activity'
import Button from '../general/Button'
import { faHome, faStar, faClock } from '@fortawesome/free-solid-svg-icons'  // Import the icons

const SideBar = () => {
  const [selected, setSelected] = useState("home");
  const [small, setSmall] = useState(true);
  const [activities, setActivities] = useState([]);
  const [showActivities, setShowActivites] = useState(false);

  // useNavigate hook
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get('/api/activity');
        setActivities(response.data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  // quick and dirty page changer
  const setPage = (pageName) => {
    setSelected(pageName);
    switch(pageName) {
      case "Home":
        navigate('/home');
        break;
      case "Favorites":
        navigate('/favorites');
        break;
      case "Watch Later":
        navigate('/watchlater');
        break;
      default:
        console.log("Unknown page name");
    }
  }

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