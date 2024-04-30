import React, { useState } from 'react';
import './css/App.css';
import logo from './img/logo.png';
import loginPic from './img/loginPic.png'; // Ruta de tu imagen

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    // Aquí deberías agregar la lógica de autenticación con tu backend
    // Por simplicidad, aquí simplemente marcamos al usuario como autenticado
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Aquí deberías agregar la lógica de cierre de sesión
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <div className="App">
        <div className="top-bar" style={{ backgroundColor: '#0159A1' }}>
          <img src={logo} alt="Logo" className="logo" />
          <span className="title">Mi Aplicación</span>
        </div>
        <header className="App-header">
          <p>
            Bienvenido, {username}!
          </p>
          <button onClick={handleLogout} className="logout-button">Cerrar sesión</button>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
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
    </div>  
  );
}

export default App;
