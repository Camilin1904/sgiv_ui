import { useNavigate } from 'react-router-dom';
import './css/login.css';
import logo from './img/logo.png';

function Home(){
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const handleLogout = () => {
      localStorage.removeItem('token')
      navigate('/')
    };
    if(!localStorage.getItem('token')){
      navigate('/')
      return;
    }
    else{
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
}

export {Home}