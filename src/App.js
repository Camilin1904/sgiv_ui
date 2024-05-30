import React, { useState } from 'react';
import './css/login.css';
import logo from './img/logo.png';
import loginPic from './img/loginPic.png';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Login } from './screens/Login';
import { HomeAdmin } from './screens/HomeAdmin'
import { HomeSales } from './screens/HomeSales'
import { HomeViewer } from './screens/HomeViewer'
import { ViewClients } from './screens/VistaClientes';
import { ViewPlan } from './screens/VistaPlanes';
import { ViewPlanDetail } from './screens/VistaDetallePlan';
import { CrearCliente } from './screens/CrearCliente';
import { crearDetallePlan } from './screens/CrearPlan';

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
      <Route path='/create-client' element={<CrearCliente/>} />
      <Route path='/create-plan-detail' element={<crearDetallePlan/>} />

    </Routes>
  )
}

export default App;
