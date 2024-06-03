import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/crearCliente.css';
import { TopBar } from '../items/TopBar';
import axios from 'axios';

function CrearUsuario() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        navigate('/');
    };

    const [username, setUsername] = useState('');
    const [pass1, setpass1] = useState('');
    const [pass2, setpass2] = useState('');
    const [email, setEmail] = useState('');
    const [types, setTypes] = useState([]);
    const [type, setType] = useState(null);


    useEffect(() => {
        const fetchIdTypes = async () => {
            await axios.get('http://localhost:9092/users/types', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => response.data)
              .then(data => setTypes(data));
        };
        fetchIdTypes();
    }, [token]);

    function crearCliente(e) {
        e.preventDefault();
        if(pass1 === pass2){

            const createC = async() => {
                const clientData = {
                type: type.id,
                username: username,
                email: email,
                password: pass1,
                };
            
            
                await axios.post('http://localhost:9092/auth/register', clientData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
                });
            };
            createC();
            navigate('/view-users')
        }
        else{
            alert('Las contraseñas son diferentes')
        }

    }

    return (
        <div id="ii2r">
            <TopBar title={'Registrar Cliente'} />
            <div id="ipbh" className="gjs-row">
                <div id="iw09o" className="gjs-cell">
                    <div id="igqg" className="gjs-row">
                        <div id="is6bi" className="gjs-row">
                            <form onSubmit={crearCliente}>
                                <div id="ib7yb" className="gjs-cell">
                                    <div id="ijwtz" className="gjs-row" style={{height: '10vh'}}>
                                        <div id="ioj32" className="gjs-cell" style={{height: '10vh'}}>
                                            <div id="ia4mh">Ingrese la información del cliente</div>
                                        </div>
                                        <div id="iqf2j" className="gjs-cell" style={{height: '10vh'}}>
                                            <button type="submit" id="in3fl">Registrar</button>
                                        </div>
                                    </div>
                                    <div id="iqx84" className="gjs-row" style={{height: '30vh'}}>
                                        <div className="gjs-cell" style={{height: '30vh'}}>
                                            <div id="igaf4" className="gjs-row" style={{height: '30vh'}}>
                                                <div id="i0cl5" className="gjs-cell">
                                                    <div id="ityxu" className="texto">Nombre de usuario</div>
                                                    <input
                                                        type="text"
                                                        id="ioow3"
                                                        required
                                                        onChange={e => setUsername(e.target.value)}
                                                        placeholder="Nombre de usuario"
                                                        className="texto"
                                                    />
                                                </div>
                                                <div id="i0a0k" className="gjs-cell">
                                                    <div id="iv07cp" className="texto">Correo electronico</div>
                                                    <input
                                                        type="text"
                                                        id="ixeik5"
                                                        required
                                                        onChange={e => setEmail(e.target.value)}
                                                        placeholder="E-mail"
                                                        className="texto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gjs-cell" style={{height: '30vh'}}>
                                                <div id="inbik" className="gjs-cell">
                                                    <div id="i0g2gm" className="textr">Tipo de Usuario</div>
                                                    <select
                                                        required
                                                        onChange={e => {
                                                            const selectedType = types.find(type => type.name === e.target.value);
                                                            setType(selectedType);
                                                        }}
                                                        className="textr"
                                                    >
                                                        <option value="" disabled selected>Seleccione un tipo</option>
                                                        {types.map((type, index) => (
                                                            <option key={index} value={type.name}>{type.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="iu9ej" className="gjs-row">
                                        <div id="ip4cd" className="gjs-cell" style={{height: '30vh'}}>
                                            <div id="igtxh" className="gjs-row" style={{height: '30vh'}}>
                                                <div id="iyudr" className="gjs-cell">
                                                    <div id="ig9af4" className="texto">Contraseña</div>
                                                    <input
                                                        type="password"
                                                        id="is1wpt"
                                                        required
                                                        placeholder="Contraseña"
                                                        onChange={e => setpass1(e.target.value)}
                                                        className="texto"
                                                    />
                                                </div>
                                                <div id="i2uhv" className="gjs-cell">
                                                    <div id="i40cuc" className="texto">Repita la contraseña</div>
                                                    <input
                                                        type="password"
                                                        id="ifa1p2"
                                                        placeholder="Contraseña"
                                                        onChange={e => setpass2(e.target.value)}
                                                        className="texto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { CrearUsuario };