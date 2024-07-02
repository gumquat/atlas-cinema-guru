import React from 'react'
import './auth.css'
import { faUser, faLock, faKey } from '@fortawesome/free-solid-svg-icons';
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'

// ___PROPS__
// username: string – The username controlled state
// password: string – The password controlled state
// setUsername: function – The setState for the username state
// setPassword: function –The setState for the password state
const Login = ({username, password, setUsername, setPassword}) => {
  return (
    <div>
      <h1>Sign in with your account</h1>    
      <Input
      label="Username"
      type="text"
      className="auth-input"
      value={username}
      setValue={setUsername}
      icon={faUser}
      inputAttributes={{
        placeholder: "Username",
        required: true
      }}
      />
      <Input
        label="Password"
        type="password"
        className="auth-input"
        value={password}
        setValue={setPassword}
        icon={faLock}
        inputAttributes={{
          placeholder: "Password:",
          required: true
        }}
      />
      <Button 
      label=" Sign In"
      icon={faKey}/>
    </div>
  )
}

export default Login;