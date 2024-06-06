import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/createPlanDetail.css';
import { TopBar } from '../items/TopBar';
import axios from 'axios';

function CreatePlanDetail() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [name, setName] = useState(localStorage.getItem('pdname'))
    const [value, setValue] = useState(localStorage.getItem('pdvalue'))
    const [days, setDays] = useState(localStorage.getItem('pddays'))
    const [dest, setDest] = useState(localStorage.getItem('pddest'))
    const [meals, setMeals] = useState(localStorage.getItem('pdmeals'))
    const [transport, setTransport] = useState(localStorage.getItem('pdtransport'))
    const [hotel, setHotel] = useState(localStorage.getItem('pdhotel'))

    function isDest(){
        
        if(!dest){
            return 'Seleccione un Destino'
        }
        else{
            return dest
        }
    }

    const handleLogout = () => {
        navigate('/');
    };
    

    return (
        <div id="ii2r">
            <TopBar title={'Registrar Detalle plan'} />
            <div id="ipbh" className="gjs-row">
                <div id="iw09o" className="gjs-cell">
                    <div id="igqg" className="gjs-row">
                        <div id="is6bi" className="gjs-row">
                            <form onSubmit={null}>
                                <div id="ib7yb" className="gjs-cell">
                                    <div id="ijwtz" className="gjs-row" style={{height: '10vh'}}>
                                        <div id="ioj32" className="gjs-cell" style={{height: '10vh'}}>
                                            <div id="ia4mh">Ingrese la información del Detalle plan</div>
                                        </div>
                                        <div id="iqf2j" className="gjs-cell" style={{height: '10vh'}}>
                                            <button type="submit" id="in3fl">Registrar</button>
                                        </div>
                                    </div>
                                </div>
                                <div id='form-fields'>
                                        <div id='form-table'>
                                            <div class='colform'>
                                                <label class="textr inform"  required>Nombre:</label>
                                                <input class="textr inform" required type='text' placeholder='Nombre'></input>
                                                <label class="textr inform"  required>Numero de dias:</label>
                                                <input class="textr inform" required type='number' placeholder='Numero de dias'></input>
                                                <br />
                                                <label class="textr inform"  required>Numero de noches:</label>
                                                <label class="textr inform"  required>Destino:</label>
                                                <button
                                                        required
                                                        class="textr inform" 
                                                        type='button'
                                                    >
                                                        {isDest()}
                                                        
                                                </button>
                                            </div>
                                            <div class='colform'>
                                                <label class="textr inform"  required>Valor:</label>
                                                <input class="textr inform" required placeholder='Valor'></input>
                                                <label class="textr inform"  required>Alimentación:</label>
                                                <select
                                                        required
                                                        onChange={null}
                                                        class="textr inform" 
                                                    >
                                                        <option value="" disabled selected>Seleccione un plan de alimentacion</option>
                                                        
                                                </select>
                                                <label class="textr inform"  required>Transporte:</label>
                                                <select
                                                        required
                                                        onChange={null}
                                                        class="textr inform" 
                                                    >
                                                        <option value="" disabled selected>Seleccione un plan de transporte</option>
                                                        
                                                </select>
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

export { CreatePlanDetail };
