import React, { useState } from 'react';
import './css/App.css';
import logo from './img/logo.png';
import loginPic from './img/loginPic.png';
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    
    const handleLogin = async (event) => {
      event.preventDefault();
      setLoggedIn(true);

      await fetch('http://localhost:9092/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"username":username,"password":password})
      })
      .then(response => response.text())
      .then(response => {
        try{
          const responseJson = JSON.parse(response);
          localStorage.setItem("token",responseJson.token);
          localStorage.setItem("username",username);
          navigate('/home');
        } catch(error){
          alert("Nombre de usuario o constraseña incorrectos")
        }
      });
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