import React from 'react'
import './dashboard.css'
import Header from '../../components/navigation/Header'
import SideBar from '../../components/navigation/SideBar'
import Filter from '../../components/movies/Filter'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

//placeholders
const HomePage = () => <div></div>;
const Favorites = () => <div></div>;
const WatchLater = () => <div></div>;

const Dashboard = ({userUsername, setIsLoggedIn}) => {
  return (
    <BrowserRouter>
      <div className="dashboard">
        <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        <div className="dashboard-content">
          <SideBar />
          <div className="main-content">
            <Filter/>
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watchlater" element={<WatchLater />} />
              <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Dashboard;