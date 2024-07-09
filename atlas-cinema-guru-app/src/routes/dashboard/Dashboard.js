import React from 'react'
import './dashboard.css'
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Dashboard = ({userUsername, setIsLoggedIn}) => {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <SideBar />
        <Routes>
          <Route path="/home"/>
          <Route path="/favorites"/>
          <Route path="/watchlater"/>
          <Route path="*" element={<Navigate replace to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;