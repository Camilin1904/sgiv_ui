import { useNavigate } from 'react-router-dom';
import '../css/homeAdmin.css';
import { useEffect, useState } from 'react';
import { TopBar } from '../items/TopBar';
import axios from 'axios';
import { jwtDecode } from "jwt-decode";
import { RouteHome } from './HomeRouter';

function HomeAdmin() {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const token = localStorage.getItem('token');
  const [popularDestination, setPopularDestination] = useState('');
  const [saleNow, setSaleNow] = useState('');
  const [popPlan, setPopPlan] = useState('');
  const decodedToken = jwtDecode(token);

  if (decodedToken.Authorities[0].name !== 'Admin') {
    navigate(RouteHome());
  }

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
      }
    };

    fetchPopDest();
    fetchSaleNow();
    fetchPopPlan();
  }, [token]);

  const toPlans = () => {
    navigate('/view-plans');
  };
  const toClients = () => {
    navigate('/view-clients');
  };
  const toPlanDetails = () => {
    navigate('/view-plan-details');
  };

  const toDestinations = () => {
    navigate('/view-destinations')
  }

  const toHotels = () => {
    navigate('/view-hotels')
  }
  const toMeals = () => {
    navigate('/view-meals')
  }
  const toTransportation = () => {
    navigate('/view-transportation')
  }

  const toUsers = () => {
    navigate('/view-users')
  }

  const toDetails = () => {
    navigate('/details');
  }

  return (
    <body id="ii2r">
      <TopBar title={''} />
      <div id="ipbh" className="gjs-row">
        <div className="gjs-cell">
          <div id="igqg" className="gjs-row">
            <div className="gjs-cell">
              <div id="ix0m" className="gjs-row">
                <div id="iagje" className="gjs-cell">
                  <div id="ie43l">Bienvenido (administrador), {username}
                  </div>
                </div>
                <div id="ij1vb" className="gjs-cell">
                  <div id="isr62" className="gjs-row" style={{ height: "15%" }}>
                    <div className="gjs-cell">
                      <button type="button" style={{ height: "70%" }} id="ihcz4" onClick={toPlans} className="boton">Planes asignados</button>
                    </div>
                  </div>
                  <div id="ifpef" className="gjs-row" style={{ height: "15%" }}>
                    <div className="gjs-cell" id="imhol" >
                      <button type="button" id="ix8nz" style={{ height: "70%" }} onClick={toDestinations} className="boton">Destino</button>
                    </div>
                  </div>
                  <div id="iq8ek" className="gjs-row" style={{ height: "15%" }}>
                    <div className="gjs-cell" >
                      <button type="button" id="iv92q" style={{ height: "70%" }} onClick={toPlanDetails} className="boton">Planes</button>
                    </div>
                  </div>
                  <div id="iwtke" className="gjs-row" style={{ height: "15%" }}>
                    <div className="gjs-cell" >
                      <button type="button" id="if9va" style={{ height: "70%" }} onClick={toClients} className="boton">Ver clientes</button>
                    </div>
                  </div>
                  <div id="iwtke2" className="gjs-row" style={{ height: "15%" }}>
                    <div className="gjs-cell" >
                      <button type="button" id="if9va" style={{ height: "70%" }} onClick={toHotels} className="boton">Ver hoteles</button>
                    </div>
                  </div>
                  <div id="iwtke3" className="gjs-row" style={{ height: "15%" }}>
                    <div className="gjs-cell" >
                      <button type="button" id="if9va" style={{ height: "70%" }} onClick={toMeals} className="boton">Ver Opciones de alimetación</button>
                    </div>
                  </div>
                  <div id="iwtke3" className="gjs-row" style={{ height: "15%" }}>
                    <div className="gjs-cell" >
                      <button type="button" id="if9va" style={{ height: "70%" }} onClick={toTransportation} className="boton">Ver Opciones de transporte</button>
                    </div>
                  </div>
                  <div id="iwtke4" className="gjs-row" style={{ height: "15%" }}>
                    <div className="gjs-cell" >
                      <button type="button" id="if9va" style={{ height: "70%" }} onClick={toUsers} className="boton">Ver Usuarios</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="ikv4" className="gjs-cell">
              <div id="ilxmp" className="gjs-row">
                <div id="i1axm" className="gjs-cell">
                  <div id="iwo55" className="gjs-row">
                    <div id="i4o0i" className="gjs-cell">
                      <div id="iri2j" className="gjs-row">
                        <div id="i1hnz" className="gjs-cell">
                          <div id="irp45">Resumen del día
                          </div>
                        </div>
                        <div id="il5hs" className="gjs-cell">
                          <button type="button" className="boton" id="ibuui" onClick={toDetails}>Detalles</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="iuuwh" className="gjs-row">
                  </div>
                  <div id="i4pof" className="gjs-row">
                    <div id="ilw0z" className="gjs-cell">
                      <div id="iwos9" className="gjs-row">
                        <div id="i6e9t" className="gjs-cell">
                          <div id="io1j7">Destino mas popular:
                          </div>
                        </div>
                        <div id="ivvm3" className="gjs-cell">
                          <div id="ir9v2">{popularDestination}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="i7o4y" className="gjs-row">
                    <div id="idwlu" className="gjs-cell">
                      <div id="ixzbh" className="gjs-row">
                        <div className="gjs-cell">
                          <div id="ibejd">Plan mas popular:
                          </div>
                        </div>
                        <div className="gjs-cell">
                          <div id="iujzv">{popPlan}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="ixk3k" className="gjs-row">
                    <div id="i4zff" className="gjs-cell">
                      <div id="it4fl" className="gjs-row">
                        <div id="idz3i" className="gjs-cell">
                          <div id="iaqkv">N° de ventas este día:
                          </div>
                        </div>
                        <div className="gjs-cell">
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

export { HomeAdmin };
