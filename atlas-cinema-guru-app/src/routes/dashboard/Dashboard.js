import React from 'react'
import './dashboard.css'
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar'

const Dashboard = ({userUsername, setIsLoggedIn}) => {
  return (
    <div>
      <div className='custom-header'>
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <div>
        <SideBar/>
      </div>

    </div>
  )
}

export default Dashboard;