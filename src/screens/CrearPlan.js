import { useNavigate } from 'react-router-dom';
import '../css/homeAdmin.css';
import { TopBar } from '../items/TopBar';

function Home(){
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const handleLogout = () => {
      navigate('/')
    };

    return (
        <body id="ii2r">
        <TopBar title={'Registrar Cliente'} />
        <div id="ipbh" class="gjs-row">
          <div class="gjs-cell">
            <div id="igqg" class="gjs-row">
              <div id="ies5" class="gjs-cell">
                <div id="ix0m" class="gjs-row">
                  <div id="iagje" class="gjs-cell">
                    <div id="ie43l">Crear plan
                      <br/>
                    </div>
                  </div>
                  <div id="ij1vb" class="gjs-cell">
                    <div id="ix2th" class="gjs-row">
                      <div id="itqtm" class="gjs-cell">
                        <input type="text" id="idu2j" placeholder="Cliente"/>
                      </div>
                      <div id="i3d5o" class="gjs-cell">
                        <button type="button" id="inksn"></button>
                      </div>
                    </div>
                    <div id="isr62" class="gjs-row">
                    </div>
                    <div id="ifpef" class="gjs-row">
                      <div id="imhol" class="gjs-cell">
                        <select type="text" id="i24uu" name="Plan"><option value="opt1">Option 1</option><option value="opt2">Option 2</option></select>
                      </div>
                    </div>
                    <div id="iq8ek" class="gjs-row">
                      <div id="iq0k6" class="gjs-cell">
                        <button type="button" id="iv92q" class="boton_detalles">Detalles</button>
                      </div>
                    </div>
                    <div id="iwtke" class="gjs-row">
                      <div id="ijpuy" class="gjs-cell">
                        <button type="button" id="if9va" class="boton">Crear</button>
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
                            <div id="irp45">Valor a pagar
                              <br/>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="gjs-row" id="im77r">
                      <div class="gjs-cell" id="itjho">
                      </div>
                    </div>
                    <div class="gjs-row" id="iq5sa">
                      <div class="gjs-cell">
                        <div class="gjs-row" id="ihq4q">
                          <div class="gjs-cell" id="it9vn">
                            <div id="i9py8">Valor total a pagar:
                              <br/>
                            </div>
                          </div>
                          <div class="gjs-cell">
                            <div id="il58t">Insert your text here
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

export {Home}