import React, {useState} from 'react'
import './auth.css'
import Button from './src/components/general/Button' 
import Login from './src/routes/auth/Login'
import Register from './src/routes/auth/Register'

// ___PROPS___
// setIsLoggedIn: function – The setState for the isLoggedin state
// setUserUsername: function –The setState for the userUsername state
const Authentication = ({setIsLoggedIn, setUserUserName}) => {
  //STATE
  const [_switch, setSwitch] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle auth submission here
  };

  return (
    <div className="authentication">
      <form onSubmit={handleSubmit}>
        <div className="auth-buttons">
          <Button 
            label="Sign In" 
            onClick={() => setSwitch(true)}
            className={_switch ? 'active' : ''}
          />
          <Button 
            label="Sign Up" 
            onClick={() => setSwitch(false)}
            className={!_switch ? 'active' : ''}
          />
        </div>
      </form>
    </div>
  )
}

export default Authentication;