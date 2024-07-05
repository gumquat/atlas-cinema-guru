import React from 'react'
import './dashboard.css'
import Header from '../../components/navigation/Header'

const Dashboard = ({userUserName, setIsLoggedIn}) => {
  return (
    <div>
      <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default Dashboard;