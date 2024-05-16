import React, { useState } from 'react';
import './css/login.css';
import logo from './img/logo.png';
import loginPic from './img/loginPic.png';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Login } from './Login';
import { HomeAdmin } from './HomeAdmin'
import { HomeSales } from './HomeSales'
import { HomeViewer } from './HomeViewer'
import { ViewClients } from './VistaClientes';
import { ViewPlan } from './VistaPlanes';
import { ViewPlanDetail } from './VistaDetallePlan';

function App() {
  return(
    <Routes>
      <Route exact path='/' element={<Login/>} />
      <Route path='/home-admin' element={<HomeAdmin/>} />
      <Route path='/home-sales' element={<HomeSales/>} />
      <Route path='/home-viewer' element={<HomeViewer/>} />
      <Route path='/view-clients' element={<ViewClients/>} />
      <Route path='/view-plans' element={<ViewPlan/>} />
      <Route path='/view-plan-details' element={<ViewPlanDetail/>} />

    </Routes>
  )
}

export default App;
