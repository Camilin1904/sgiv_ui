import React, { useState } from 'react';
import './css/App.css';
import logo from './img/logo.png';
import loginPic from './img/loginPic.png';
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()
    
    const handleLogin = (event) => {
      event.preventDefault();
      setLoggedIn(true);
      localStorage.setItem('username',username);
      localStorage.setItem('loggedIn',loggedIn)
      navigate("/home");
    };

    return (
        <>
          <div className="top-bar" style={{ backgroundColor: '#0159A1' }}>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <header className="App-header">
            <h2 className='login-label-greet'>Inicio de sesión</h2> {}
            <form onSubmit={handleLogin}>
              <div className="login-container">
                <label className="login-label">Nombre de usuario:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="login-input" />
              </div>
              <div className="login-container">
                <label className="login-label">Contraseña:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="login-input" />
              </div>
              <button type="submit" className="login-button">Iniciar sesión</button>
            </form>
          </header>
          <div className="image-container">
            <img src={loginPic} alt="loginPic" className="right-image" />
          </div>
        </>  
      );

}

export {Login}