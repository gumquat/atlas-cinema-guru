import React from 'react'
import './auth.css'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import {  faUser, faLock, faPlus } from '@fortawesome/free-solid-svg-icons';

// ___PROPS___
// username: string – The username controlled state
// password: string – The password controlled state
// setUsername: function – The setState for the username state
// setPassword: function –The setState for the password state
const Register = ({username, password, setUsername, setPassword}) => {
  return (
    <div>
      <h1>Create a new account</h1>    
      <Input
      //label="Username"
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
        //label="Password"
        type="password"
        className="auth-input"
        value={password}
        setValue={setPassword}
        icon={faLock}
        inputAttributes={{
          placeholder: "Password",
          required: true
        }}
      />
      <Button
      className="SignUp-Button"
      label=" Sign Up"
      icon={faPlus}/>
    </div>
  )
}

export default Register