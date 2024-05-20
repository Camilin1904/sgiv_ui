import { useNavigate } from 'react-router-dom';
import './css/homeViewer.css';
import logo from './img/logo.png';

function HomeSales(){
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    const handleLogout = () => {
      navigate('/')
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
                    <div id="ie43l">Bienvenido (ventas), {username}
                    </div>
                  </div>
                  <div id="ij1vb" class="gjs-cell">
                    <div id="isr62" class="gjs-row">
                      <div class="gjs-cell" id="im38n">
                        <button type="button" id="ihcz4" onClick={toPlanDetails} class="boton">Ver planes</button>
                      </div>
                    </div>
                    <div id="ifpef" class="gjs-row">
                      <div class="gjs-cell" id="imhol">
                        <button type="button" id="ix8nz" class="boton">Ver destinos</button>
                      </div>
                    </div>
                    <div id="iq8ek" class="gjs-row">
                      <div class="gjs-cell" id="iq0k6">
                        <button type="button" id="iv92q" class="boton">Registrar cliente</button>
                      </div>
                    </div>
                    <div id="iwtke" class="gjs-row">
                      <div class="gjs-cell" id="ijpuy">
                        <button type="button" id="if9va" class="boton">Vender plan</button>
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
                            <div id="irp45">Recomendaciones
                              <br/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="iuuwh" class="gjs-row">
                    </div>
                    <img id="if6p3" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    )
}

export {HomeSales}