import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/crearTransporte.css';
import { TopBar } from '../items/TopBar';
import axios from 'axios';

function CrearTransporte() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleCreateTransportation = async (e) => {
        e.preventDefault();

        const transportationData = {
            id: null,
            name: name,
            description: description,
            status: 'Active'
        };

        try {
            await axios.post('http://localhost:9092/transportation/create', transportationData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            navigate('/view-transportation');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div id="ii2r">
            <TopBar title={'Crear Transporte'} />
            <div id="ipbh" className="gjs-row">
                <div id="iw09o" className="gjs-cell">
                    <div id="igqg" className="gjs-row">
                        <div id="is6bi" className="gjs-row">
                            <form onSubmit={handleCreateTransportation}>
                                <div id="ib7yb" className="gjs-cell">
                                    <div id="ijwtz" className="gjs-row" style={{height: '20vh'}}>
                                        <div id="ioj32" className="gjs-cell" style={{height: '10vh'}}>
                                            <div id="ia4mh">Ingrese la información del transporte</div>
                                        </div>
                                        <div id="iqf2j" className="gjs-cell" style={{height: '10vh'}}>
                                            <button type="submit" id="in3fl">Crear</button>
                                        </div>
                                    </div>
                                    <div id="iqx84" className="gjs-row" style={{height: '40vh'}}>
                                        <div className="gjs-cell" style={{height: '40vh'}}>
                                            <div id="igaf4" className="gjs-row" style={{height: '40vh'}}>
                                                <div id="i0cl5" className="gjs-cell">
                                                    <div id="ityxu" className="texto">Nombre de transporte</div>
                                                    <input
                                                        type="text"
                                                        id="ioow3"
                                                        required
                                                        placeholder="Nombre de transporte"
                                                        className="texto"
                                                        onChange={e => setName(e.target.value)}
                                                    />
                                                </div>
                                                <div id="i0a0k" className="gjs-cell">
                                                    <div id="iv07cp" className="texto">Descripción</div>
                                                    <textarea
                                                        id="ixeik5"
                                                        required
                                                        placeholder="Descripción"
                                                        className="texto"
                                                        onChange={e => setDescription(e.target.value)}
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

export { CrearTransporte };
