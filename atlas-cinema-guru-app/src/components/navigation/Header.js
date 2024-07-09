import React from 'react'
import './navigation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="header-nav">
      <p>Cinema Guru</p>
      <div className="user-options">
        <img src="https://picsum.photos/100/100" alt="Random avatar" />
        <p>Welcome, {userUsername}!</p>
        <span className='logout-span' onClick={logout}>
          Logout <FontAwesomeIcon icon={faSignOutAlt} />
        </span>
      </div>
    </nav>
  )
}

export default Header;