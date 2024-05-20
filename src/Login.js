import React, { useState } from 'react';
import './css/login.css';
import logo from './img/logo.png';
import loginPic from './img/loginPic.png';
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    
    const handleLogin = async (event) => {
      event.preventDefault();

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
          const loginResponse = JSON.parse(response);
          const token = loginResponse.token;
          const decodedToken = jwtDecode(token);
          const type = decodedToken.Authorities[0].name;
          localStorage.setItem("username",username);
          localStorage.setItem("token",token);
            if(type==="Admin"){
              navigate('/home-admin');
            } else if(type==="Sales"){
              navigate('/home-sales');
            } else if(type==="Viewer"){
              navigate('/home-viewer');
            }
        } catch(error){
            alert("Nombre de usuario o constraseña incorrectos");
        } 
      });
    }

    return (
         <body id="ii2r">
  <div id="i10d" class="row">
    <div id="ilv1" class="cell">
      <div class="gjs-row" id="i5cs3">
        <div class="gjs-cell" id="iwo1e">
          <img id="ijcaw" src={logo}/>
        </div>
      </div>
    </div>
  </div>
  <div id="i3o4w" class="gjs-row1">
    <div id="ira25" class="gjs-cell">
      <div id="it69l" class="gjs-row1">
        <div id="ih5bi" class="gjs-cell">
          <div id="ib1q8">Inicio de sesión
            <br/>
          </div>
        </div>
      </div>
      <form onSubmit={handleLogin}>
      <div id="iz94e" class="gjs-row1">
        <div class="gjs-cell" id="ilm2j">
          <div id="ih6m4">Usuario
          </div>
          <input type="text" id="iqygw" placeholder="Usuario" onChange={(e) => setUsername(e.target.value)}/>
        </div>
      </div>
      <div id="iv1jg" class="gjs-row1">
        <div class="gjs-cell">
          <div id="iqdmx">Contraseña
          </div>
          <input type="password" id="ik8a2" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)}/>
        </div>
      </div>
      <div id="is5ul" class="gjs-row1">
        <div class="gjs-cell" id="i04xu">
          <button type="submit" id="i9r1o">Acceder</button>
        </div>
      </div>
      </form>
    </div>
    <div id="i221g" class="gjs-cell">
      <div id="i354b" class="gjs-row1">
        <div id="i19lt" class="gjs-cell">
          <img id="ijhjw" src={loginPic}/>
          </div>
      </div>
    </div>
  </div>
</body>  
      );

}

export {Login}