import { useNavigate } from 'react-router-dom';
import '../css/vistaClientes.css';
import logo from '../img/logo.png';

function ViewClients(){
    const navigate = useNavigate()
    const handleLogout = () => {
      navigate('/')
    };

    return (
        <body id="ii2r">
        <div id="i10d" class="gjs-row">
          <div id="ilv1" class="gjs-cell">
            <div class="gjs-row" id="ibzy2">
              <div class="gjs-cell" id="i526g">
                <img id="ijcaw" src={logo} />
                </div>
              <div class="gjs-cell" id="ikt9w">
                <div id="iah6o2">Clientes
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ipbh" class="gjs-row">
          <div class="gjs-cell">
            <div id="igqg" class="gjs-row">
              <div id="ikv4" class="gjs-cell">
                <div id="ilxmp" class="gjs-row">
                  <div id="i1axm" class="gjs-cell">
                    <div id="iwo55" class="gjs-row">
                      <div id="i4o0i" class="gjs-cell">
                        <div class="gjs-row" id="i6rii7">
                          <div class="gjs-cell" id="i0ak2w">
                            <input type="text" id="im30us" placeholder="Usuario"/>
                          </div>
                          <div class="gjs-cell" id="idgqzc">
                            <button type="button" id="i1aomg"></button>
                          </div>
                          <div class="gjs-cell" id="ivtoj3">
                            <button type="button" id="ivslaq">Crear</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="gjs-row" id="ilh64g">
                      <div class="gjs-cell" id="izbov7">
                      </div>
                    </div>
                    <div class="gjs-row" id="i39ss1">
                      <div class="gjs-cell" id="istsko">
                        <div class="gjs-row" id="iu7isy">
                          <div class="gjs-cell" id="i6hi6h">
                            <button type="button" id="if0ynj">Anterior</button>
                          </div>
                          <div class="gjs-cell" id="ixsnst">
                            <div class="gjs-row" id="i89pat">
                              <div class="gjs-cell" id="ihtxki">
                                <input type="text" id="i46s8v"/>
                              </div>
                              <div class="gjs-cell" id="i9i75f">
                                <button type="button" id="inpm0j"></button>
                              </div>
                            </div>
                          </div>
                          <div class="gjs-cell" id="izlfvz">
                            <button type="button" id="isdsj6">Siguiente</button>
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
    )
}

export {ViewClients}