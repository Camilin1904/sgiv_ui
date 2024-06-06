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
import { CreatePlan } from './screens/CrearPlan';
import { ViewDestinations } from './screens/VistaDestinos';
import { ViewHotels } from './screens/VistaHoteles';
import { CrearTransporte } from './screens/CrearTransporte';
import { CrearAlimentacion } from './screens/CrearAlimentacion';
import { ViewMeals } from './screens/vistaAlimentacion';
import { ViewTransportation } from './screens/vistaTransporte';
import { ViewUsers } from './screens/UserScreen';
import { CrearUsuario } from './screens/CrearUsuario';
import { CrearDestino } from './screens/CrearDestino';
import { CreatePlanDetail } from './screens/CreatePlanDetail';
import { OnlyViewPlanDetail } from './screens/OnlyViewPlanDetail';
import { OnlyViewDestinations } from './screens/OnlyViewDestinations';
import { SelectDestinations } from './screens/formsParts/SelectDestination';
import { SelectMeals } from './screens/formsParts/SelectMeals';
import { SelectTransportation } from './screens/formsParts/SelectTransportation';
import { SelectHotels } from './screens/formsParts/SelectHotel';
import { CrearHotel } from './screens/CrearHotel';
import { Details } from './screens/Details';

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
      <Route path='/only-view-plan-details' element={<OnlyViewPlanDetail/>} />
      <Route path='/view-destinations' element={<ViewDestinations/>}/>
      <Route path='/only-view-destinations' element={<OnlyViewDestinations/>}/>
      <Route path='/view-hotels' element={<ViewHotels/>}/>
      <Route path='/view-meals' element={<ViewMeals/>}/>
      <Route path='/view-transportation' element={<ViewTransportation/>}/>
      <Route path='/view-users' element={<ViewUsers/>}/>
      <Route path='/create-client' element={<CrearCliente/>}/>
      <Route path='/create-plan' element={<CreatePlan/>}/>
      <Route path='/create-transportation' element={<CrearTransporte/>}/>
      <Route path='/create-meal' element={<CrearAlimentacion/>}/>
      <Route path='/create-user' element={<CrearUsuario/>}/>
      <Route path='/create-destination' element={<CrearDestino/>}/>
      <Route path='/create-plan-detail' element={<CreatePlanDetail/>}/>
      <Route path='/select-destination' element={<SelectDestinations/>}/>
      <Route path='/select-meals' element={<SelectMeals/>}/>
      <Route path='/select-transportation' element={<SelectTransportation/>}/>
      <Route path='/select-hotel' element={<SelectHotels/>}/>
      <Route path='/create-hotel' element={<CrearHotel/>}/>
      <Route path="/details" element={<Details/>} />
    </Routes>
  )
}

export default App;
