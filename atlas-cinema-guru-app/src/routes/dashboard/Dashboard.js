import React from 'react'
import './dashboard.css'
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar'

const Dashboard = ({userUsername, setIsLoggedIn}) => {
  return (
    <div>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
      <Sidebar/>
    </div>
  )
}

export default Dashboard;