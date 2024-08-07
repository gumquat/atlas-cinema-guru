import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Authentication from './routes/auth/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
// import MovieCard from './components/movies/MovieCard';
import Filter from './components/movies/Filter';

function App() {
  // APP useState Is Logged IN/OFF
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // APP useState USERNAME and PASSWORD
  const [userUsername, setUserUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // SearchBar useState
  const [title, setTitle] = useState('');
  // Input useState
  const [inputValue, setInputValue] = useState('');
  // SelectedInput useState
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);

    if (accessToken) {
      axios.post('http://localhost:8000/api/auth/', {}, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })
      .then(response => {
        setUserUsername(response.data.username);
        setIsLoggedIn(true);
      })
      .catch(error => {
        console.log('Authentication error:', error.response ? error.response.data : error);
      })
    }
  }, []);

  return (
      <div className={`App ${isLoggedIn ? 'dashboard-view' : 'authentication-view'}`}>
        {isLoggedIn ? <Dashboard
          userUsername={userUsername}
          setIsLoggedIn={setIsLoggedIn}
        /> : <Authentication
          setIsLoggedIn={setIsLoggedIn}
          setUserUsername={setUserUsername}
        />}
      </div>
  );
}

export default App;