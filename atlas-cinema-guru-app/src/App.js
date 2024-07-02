import {useState, useEffect} from 'react';
import './App.css';
import Input from './components/general/Input';
import SelectInput from './components/general/SelectInput';
import SearchBar from './components/general/SearchBar';
import Button from './components/general/Button';
import Authentication from './routes/auth/Authentication';

function App() {
  // APP useState Is Logged IN/OFF
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // APP useState USERNAME
  const [userUserName, setUserUserName] = useState('');

  // SearchBar useState
  const [title, setTitle] = useState('');
  // Input useState
  const [inputValue, setInputValue] = useState('');
  // SelectedInput useState
  const [selectedOption, setSelectedOption] = useState('');
  // SelectInput Options
  const options = [
    { label: 'Default', value: '1' },
    { label: 'Latest', value: '2' },
    { label: 'Oldest', value: '3' },
    { label: 'Highest Rated', value: '4' },
    { label: 'Lowest Rated', value: '5' },
  ];

  // useEffect for handling LOGIN when the component mounts  
  useEffect(() => {
    const authenticateUser = async () => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        try {
          const response = await fetch('/api/auth/', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`,
              'Content-Type': 'application/json'
            }
          });

          if (response.ok) {
            // Handle authetication success
            const data = await response.json();
            setIsLoggedIn(true);
            setUserUsername(data.username);
          } else {
            // Handle authentication failure
            setIsLoggedIn(false);
            setUserUsername('');
          }
        } catch (error) {
          // error logging
          console.error('Authentication error:', error);
          setIsLoggedIn(false);
          setUserUsername('');
        }
      }
    };
    authenticateUser();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="App">




      {/* <div>
        <SearchBar
        title={title}
        setTitle={setTitle}/>
      </div>
      <div>
        <Button label="Load More..."/>
      </div>
      <div>
        <Input
        label="placeholder title"
        type="text"
        value={inputValue}
        setValue={setInputValue}/>
      </div>
      <div>
        <SelectInput
        label="Choose an option"
        options={options}
        value={selectedOption}
        setValue={setSelectedOption} />
      </div> */}
    </div>
  );
}

export default App;
