import React, { useState } from 'react';
import './css/App.css';
import logo from './img/logo.png';
import loginPic from './img/loginPic.png';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Login } from './Login';
import { Home } from './Home';

function App() {
  return(
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
  )
}

export default App;
