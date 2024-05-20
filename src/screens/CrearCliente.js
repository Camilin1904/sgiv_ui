import { useNavigate } from 'react-router-dom';
import './css/crearCliente.css';
import logo from './img/logo.png';
import StatService from './service/StatService';
import { useEffect, useState } from 'react';

function HomeAdmin(){
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    const handleLogout = () => {
      navigate('/')
    };

    const [popularDestination, setPopularDestination] = useState('');
    useEffect(()=>{
      fetch ('http://localhost:9092/stat/pop_dest',{
        method : 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
          'Access-Control-Allow-Origin': 'http://localhost:9092'
        }
        
      }).then(response => response.text())
      .then(response =>{
        const res = JSON.parse(response);
        setPopularDestination(res.name);
      })
    })
    

    return (
        <body id="ii2r">
        <div id="i10d" class="gjs-row">
          <div id="ilv1" class="gjs-cell">
            <div id="ibzy2" class="gjs-row">
              <div id="i526g" class="gjs-cell">
                <img id="ijcaw" src={logo} />
                </div>
              <div id="ikt9w" class="gjs-cell">
                <div id="iah6o2">Registrar Cliente
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="ipbh" class="gjs-row">
          <div id="iw09o" class="gjs-cell">
            <div id="igqg" class="gjs-row">
              <div id="is6bi" class="gjs-row">
                <div id="ib7yb" class="gjs-cell">
                  <div id="ijwtz" class="gjs-row">
                    <div id="ioj32" class="gjs-cell">
                      <div id="ia4mh">Ingrese la informacion del cliente
                      </div>
                    </div>
                    <div id="iqf2j" class="gjs-cell">
                      <button type="button" id="in3fl">Registrar</button>
                    </div>
                  </div>
                  <div id="iqx84" class="gjs-row">
                    <div class="gjs-cell">
                      <div id="igaf4" class="gjs-row">
                        <div id="i0cl5" class="gjs-cell">
                          <div id="ityxu" class="texto">Nombre
                          </div>
                          <input type="text" id="ioow3" placeholder="Nombre" class="texto"/>
                        </div>
                        <div id="i0a0k" class="gjs-cell">
                          <div id="iv07cp" class="texto">Apellidos
                          </div>
                          <input type="text" id="ixeik5" placeholder="Apellidos" class="texto"/>
                        </div>
                      </div>
                    </div>
                    <div class="gjs-cell">
                      <div id="i56sl" class="gjs-row">
                        <div class="gjs-cell" id="ime4x">
                          <div id="iddaz" class="textr">Sexo
                          </div>
                          <div id="i03df" class="gjs-row">
                            <div id="ioqx9" class="gjs-cell">
                              <div id="ik3xf" class="gjs-row">
                                <div id="ivpjv" class="gjs-cell">
                                  <input type="radio" id="iz7d4m" value="" name="Masculino"/>
                                </div>
                                <div id="iu0xk" class="gjs-cell">
                                  <div id="ifpuja">Masculino
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div id="i9u9j" class="gjs-cell">
                              <div id="i9gva4" class="gjs-row">
                                <div id="iqpndx" class="gjs-cell">
                                  <input type="radio" id="igjjqz" name="Femenino"/>
                                </div>
                                <div id="i90ol2" class="gjs-cell">
                                  <div id="imqp0p">Femenino
                                    <br/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div id="ie5os" class="gjs-cell">
                          <div id="ihiyv4" class="textr">Identificación
                            <br/>
                          </div>
                          <input type="text" id="ilrxql" placeholder="Identificacion" class="textr"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="iu9ej" class="gjs-row">
                    <div id="ip4cd" class="gjs-cell">
                      <div id="igtxh" class="gjs-row">
                        <div id="iyudr" class="gjs-cell">
                          <div id="ig9af4" class="texto">Telefono 1
                          </div>
                          <input type="text" id="is1wpt" placeholder="Telefono 1" class="texto"/>
                        </div>
                        <div id="i2uhv" class="gjs-cell">
                          <div id="i40cuc" class="texto">Telefono 2
                          </div>
                          <input type="text" id="ifa1p2" placeholder="Telefono 2" class="texto"/>
                        </div>
                      </div>
                    </div>
                    <div class="gjs-cell">
                      <div id="i9fb5" class="gjs-row">
                        <div class="gjs-cell" id="i6587">
                          <div id="iiz877" class="textr">Correo
                          </div>
                          <input type="text" id="io12dg" placeholder="Correo" class="textr"/>
                        </div>
                        <div id="inbik" class="gjs-cell">
                          <div id="i0g2gm" class="textr">Fecha de nacimiento
                          </div>
                          <input type="text" id="ifd1h5" placeholder="Fecha de nacimiento" class="textr"/>
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