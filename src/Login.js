import React, { useState } from 'react';
import './css/login.css';
import logo from './img/logo.png';
import loginPic from './img/loginPic.png';
import { useNavigate } from "react-router-dom";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate()
    
    const handleLogin = async (event) => {
      event.preventDefault();
      setLoggedIn(true);

      await fetch('http://localhost:9092/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify([username,password])
      })
      .then(response => response.text())
      .then(userId => {
        alert(userId);
        navigate('/home')
      });
    };

    return (
        <>
          <body id="ii2r">
  <div class="row" id="i10d">
    <div class="cell" id="ilv1">
       <img id='ijcaw' src={logo}/>
    </div>
  </div>
  <div class="row" id="i26g">
    <div class="cell" id="i8hi">
      <div class="row" id="iwn8g">
        <div class="cell" id="ienco">
          <div id="i8wcy">Inicio de sesión
          </div>
        </div>
        <div class="cell" id="igcgf">
          <div class="row" id="iwdgj">
            <div class="cell" id="ix3e6">
              <div class="login-label" id="ig1lp">Usuario
              </div>
              <input type="text" id="ioi0v" placeholder="Usuario" required class="login-input"/>
            </div>
            <div class="cell" id="ivtuz">
              <div class="login-label" id="iduiy">Contraseña
              </div>
              <input type="password" placeholder="Contraseña" required id="loginPass" class="login-input"/>
            </div>
          </div>
          <button type="button" id="iid2k">Iniciar sesión</button>
        </div>
      </div>
    </div>
    <div class="cell" id="i53ac">
      <img id="ipq92" src={loginPic}/>
    </div>
  </div>
</body>
        </>  
      );

}

export {Login}