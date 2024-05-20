import { useNavigate } from 'react-router-dom';
import './css/homeAdmin.css';
import logo from './img/logo.png';
import StatService from '../service/StatService';
import { useEffect, useState } from 'react';

import axios from 'axios';


function HomeAdmin(){
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    const handleLogout = () => {
      navigate('/')
    };
    const [popularDestination, setPopularDestination] = useState('');
    const [saleNow, setSaleNow] = useState('');
    const [popPlan, setPopPlan] = useState('');
    useEffect(() => {
  
      const fetchPopDest = async () => {
        try {
          const response = await axios.get('http://localhost:9092/stat/pop_dest', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setPopularDestination(response.data.name);
        } catch (error) {
          console.log(error);
        } finally {
          //setLoading(false);
        }
      };

      const fetchSaleNow = async () => {
        try {
          const response = await axios.get('http://localhost:9092/stat/sale_now', {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Access-Control-Allow-Origin': '*',
            }
          });
          setSaleNow(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          //setLoading(false);
        }
      };
      const fetchPopPlan = async () => {
        try {
          const response = await axios.get('http://localhost:9092/stat/pop_plan', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          setPopPlan(response.data.name);
        } catch (error) {
          console.log(error);
        } finally {
          //setLoading(false);
        }
      };


      
      fetchPopDest();
      fetchSaleNow();
      fetchPopPlan();
    }, []);

  

    const toPlans = ()=>{
      navigate('/view-plans');
    };
    const toClients = () => {
      navigate('/view-clients');
    };
    const toPlanDetails = () =>{
      navigate('/view-plan-detail');
    };
    

    return (
      <body id="ii2r">
      <div id="i10d" class="gjs-row">
        <div id="ilv1" class="gjs-cell">
          <img id="ijcaw" src={logo}/>
          </div>
      </div>
      <div id="ipbh" class="gjs-row">
        <div class="gjs-cell">
          <div id="igqg" class="gjs-row">
            <div class="gjs-cell">
              <div id="ix0m" class="gjs-row">
                <div id="iagje" class="gjs-cell">
                  <div id="ie43l">Bienvenido (administrador), {username}
                  </div>
                </div>
                <div id="ij1vb" class="gjs-cell">
                  <div id="isr62" class="gjs-row">
                    <div class="gjs-cell">
                      <button type="button" id="ihcz4" onClick={toPlans} class="boton">Planes asignados</button>
                    </div>
                  </div>
                  <div id="ifpef" class="gjs-row">
                    <div class="gjs-cell" id="imhol">
                      <button type="button" id="ix8nz" class="boton">Destino</button>
                    </div>
                  </div>
                  <div id="iq8ek" class="gjs-row">
                    <div class="gjs-cell">
                      <button type="button" id="iv92q" onClick={toPlanDetails} class="boton">Planes</button>
                    </div>
                  </div>
                  <div id="iwtke" class="gjs-row">
                    <div class="gjs-cell">
                      <button type="button" id="if9va" onClick={toClients} class="boton">Ver clientes</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="ikv4" class="gjs-cell">
              <div id="ilxmp" class="gjs-row">
                <div id="i1axm" class="gjs-cell">
                  <div id="iwo55" class="gjs-row">
                    <div id="i4o0i" class="gjs-cell">
                      <div id="iri2j" class="gjs-row">
                        <div id="i1hnz" class="gjs-cell">
                          <div id="irp45">Resumen del día
                          </div>
                        </div>
                        <div id="il5hs" class="gjs-cell">
                          <button type="button" id="ibuui">Detalles</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="iuuwh" class="gjs-row">
                  </div>
                  <div id="i4pof" class="gjs-row">
                    <div id="ilw0z" class="gjs-cell">
                      <div id="iwos9" class="gjs-row">
                        <div id="i6e9t" class="gjs-cell">
                          <div id="io1j7">Destino mas popular:
                          </div>
                        </div>
                        <div id="ivvm3" class="gjs-cell">
                          <div id="ir9v2">{popularDestination}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="i7o4y" class="gjs-row">
                    <div id="idwlu" class="gjs-cell">
                      <div id="ixzbh" class="gjs-row">
                        <div class="gjs-cell">
                          <div id="ibejd">Plan mas popular:
                          </div>
                        </div>
                        <div class="gjs-cell">
                          <div id="iujzv">{popPlan}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="ixk3k" class="gjs-row">
                    <div id="i4zff" class="gjs-cell">
                      <div id="it4fl" class="gjs-row">
                        <div id="idz3i" class="gjs-cell">
                          <div id="iaqkv">N° de ventas este día:
                          </div>
                        </div>
                        <div class="gjs-cell">
                          <div id="i3f87">{saleNow}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
    );
}

export {HomeAdmin}