import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/crearCliente.css';
import { TopBar } from '../items/TopBar';
import axios from 'axios';

function CrearCliente() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        navigate('/');
    };

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [gender, setGender] = useState('');
    const [idNum, setIdNum] = useState('');
    const [phone1, setPhone1] = useState(''); 
    const [phone2, setPhone2] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState(null);
    const [user, setUser] = useState(null);
    const [idTypes, setIdTypes] = useState([]);
    const [idType, setIdType] = useState(null);


    useEffect(() => {
        const fetchIdTypes = async () => {
            await axios.get('http://localhost:9092/users/idTypes', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => response.data)
              .then(data => setIdTypes(data));
        };
        const userFetch =async ()=>{ 
          await axios.get('http://localhost:9092/users/get', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {setUser(response.data)});}
        userFetch();
        fetchIdTypes();
    }, [token]);

    function crearCliente(e) {
      console.log(idType)
        e.preventDefault();

        const createC = async() => {
            const clientData = {
              id: null,
              identificationNumber: idNum,
              identificationType: idType,
              firstName: name,
              lastName: lastname,
              secondLastName: "",
              phone1: phone1,
              phone2: phone2,
              email: email,
              birthDate: birthDate,
              gender: gender,
              user: user,
              status: 'Active'
            };
          
          
            await axios.post('http://localhost:9092/client/create', clientData, {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            });
          };
        createC();
        navigate('/view-clients')

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
                                                    <div id="ityxu" className="texto">Nombre</div>
                                                    <input
                                                        type="text"
                                                        id="ioow3"
                                                        required
                                                        onChange={e => setName(e.target.value)}
                                                        placeholder="Nombre"
                                                        className="texto"
                                                    />
                                                </div>
                                                <div id="i0a0k" className="gjs-cell">
                                                    <div id="iv07cp" className="texto">Apellidos</div>
                                                    <input
                                                        type="text"
                                                        id="ixeik5"
                                                        required
                                                        onChange={e => setLastname(e.target.value)}
                                                        placeholder="Apellidos"
                                                        className="texto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gjs-cell" style={{height: '30vh'}}>
                                            <div id="i56sl" className="gjs-row" style={{height: '30vh'}}>
                                                <div className="gjs-cell" id="ime4x">
                                                    <div id="iddaz" className="textr">Sexo</div>
                                                    <div id="i03df" className="gjs-row">
                                                        <div id="ioqx9" className="gjs-cell">
                                                            <div id="ik3xf" className="gjs-row">
                                                                <div id="ivpjv" className="gjs-cell">
                                                                    <input
                                                                        type="radio"
                                                                        id="iz7d4m"
                                                                        required
                                                                        onChange={() => setGender('Male')}
                                                                        value="Male"
                                                                        name="gender"
                                                                    />
                                                                </div>
                                                                <div id="iu0xk" className="gjs-cell">
                                                                    <div id="ifpuja">Masculino</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="i9u9j" className="gjs-cell">
                                                            <div id="i9gva4" className="gjs-row">
                                                                <div id="iqpndx" className="gjs-cell">
                                                                    <input
                                                                        type="radio"
                                                                        id="igjjqz"
                                                                        required
                                                                        onChange={() => setGender('Female')}
                                                                        value="Female"
                                                                        name="gender"
                                                                    />
                                                                </div>
                                                                <div id="i90ol2" className="gjs-cell">
                                                                    <div id="imqp0p">Femenino</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="ie5os" className="gjs-cell">
                                                    <div id="ihiyv4" className="textr">Identificación</div>
                                                    <input
                                                        type="text"
                                                        id="ilrxql"
                                                        required
                                                        placeholder="Identificación"
                                                        onChange={e => {setIdNum(e.target.value)}}
                                                        className="textr"
                                                    />
                                                </div>
                                                <div id="inbik" className="gjs-cell">
                                                    <div id="i0g2gm" className="textr">Tipo de Identificación</div>
                                                    <select
                                                        required
                                                        onChange={e => {
                                                            const selectedType = idTypes.find(type => type.name === e.target.value);
                                                            setIdType(selectedType);
                                                        }}
                                                        className="textr"
                                                    >
                                                        <option value="" disabled selected>Seleccione un tipo</option>
                                                        {idTypes.map((type, index) => (
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
                                                    <div id="ig9af4" className="texto">Teléfono 1</div>
                                                    <input
                                                        type="text"
                                                        id="is1wpt"
                                                        required
                                                        placeholder="Teléfono 1"
                                                        onChange={e => setPhone1(e.target.value)}
                                                        className="texto"
                                                    />
                                                </div>
                                                <div id="i2uhv" className="gjs-cell">
                                                    <div id="i40cuc" className="texto">Teléfono 2</div>
                                                    <input
                                                        type="text"
                                                        id="ifa1p2"
                                                        placeholder="Teléfono 2"
                                                        onChange={e => setPhone2(e.target.value)}
                                                        className="texto"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gjs-cell" style={{height: '30vh'}}>
                                            <div id="i9fb5" className="gjs-row">
                                                <div className="gjs-cell" id="i6587">
                                                    <div id="iiz877" className="textr">Correo</div>
                                                    <input
                                                        type="text"
                                                        id="io12dg"
                                                        required
                                                        onChange={e => setEmail(e.target.value)}
                                                        placeholder="Correo"
                                                        className="textr"
                                                    />
                                                </div>
                                                <div id="inbik" className="gjs-cell">
                                                    <div id="i0g2gm" className="textr">Fecha de nacimiento</div>
                                                    <input
                                                        type="date"
                                                        id="ifd1h5"
                                                        required
                                                        onChange={e => setBirthDate(e.target.value)}
                                                        placeholder="Fecha de nacimiento"
                                                        className="textr"
                                                    />
                                                </div>
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

export { CrearCliente };
