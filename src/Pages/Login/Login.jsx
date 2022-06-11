import React, { useState } from "react";
import "./style.css";
import { Link, Navigate } from "react-router-dom";



export default function Login({ user, setUser }) {

  const [username, setUsername] = useState('')
  const [pass, setPass] = useState('')

  let auth = () => {
    if(username.length > 5 && pass.length > 5){
      setUser(
        {
          username: username,
          password: pass,
          isLog: true
        }
      )
    }
    
  }

  return (
    <div className="wrapperLogin">
      <div className="nameInfoWrapper">
        <div className="nameInfo">
          <div className="education_menegement">
          <h1>Education</h1>
          <h1>Management</h1>
          </div>
          <div className="info">
            <p>Create your schedule</p>
            <p>using one click</p>
          </div>
        </div>
      </div>
      <div className="loginFormWrapper">
        <div className="loginForm">
          <div className="form">
          <input type="text" value={username} onChange={(e) => {
            setUsername(e.target.value)
          }} placeholder="LogIn"/>
          <input type="password" value={pass} onChange={(e) => {
            setPass(e.target.value)
          }}placeholder="Password"/>
          <Link to='/home' onClick={() => auth()}><h2>Log In</h2></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
