import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/createPlanDetail.css';
import { TopBar } from '../items/TopBar';
import axios from 'axios';

function CreatePlanDetail() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const [name, setName] = useState(localStorage.getItem('pdname'))
    useEffect(()=>{
        localStorage.setItem('pdname', name)
    }, [name])
    const [value, setValue] = useState(localStorage.getItem('pdvalue'))
    useEffect(()=>{
        localStorage.setItem('pdvalue', value)
    }, [value])
    const [days, setDays] = useState(localStorage.getItem('pddays'))
    useEffect(()=>{
        localStorage.setItem('pddays', days)
    }, [days])
    const [dest, setDest] = useState(JSON.parse(localStorage.getItem('pddest')))
    const [meals, setMeals] = useState(JSON.parse(localStorage.getItem('pdmeals')))
    const [transport, setTransport] = useState(JSON.parse(localStorage.getItem('pdtransport')))
    const [hotel, setHotel] = useState(localStorage.getItem('pdhotel'))

    function isDest(){
        
        if(!dest){
            return 'Seleccione un Destino'
        }
        else{
            return dest.name
        }
    }

    function isMeal(){
        if(!meals){
            return 'Seleccione un plan de alimentación'
        }
        else{
            return meals.name
        }
    }

    function isTransport(){
        console.log(transport)
        if(!transport){
            return 'Seleccione un plan de transporte'
        }
        else{
            return transport.name
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
                                                <input class="textr inform" required type='text' placeholder='Nombre' onBlur={(name)=>setName(name)}></input>
                                                <label class="textr inform"  required>Numero de dias:</label>
                                                <input class="textr inform" required type='number' placeholder='Numero de dias' onBlur={(days)=>setDays(days)}></input>
                                                <br />
                                                <label class="textr inform"  required>Numero de noches:{days-1}</label>
                                                <label class="textr inform"  required>Destino:</label>
                                                <button
                                                        required
                                                        class="textr inform" 
                                                        type='button'
                                                        onClick={()=>navigate('/select-destination')}>
                                                        {isDest()}
                                                        
                                                </button>
                                            </div>
                                            <div class='colform'>
                                                <label class="textr inform"  required>Valor:</label>
                                                <input class="textr inform" required placeholder='Valor' onBlur={(value)=>setValue(value)}></input>
                                                <label class="textr inform"  required>Alimentación:</label>
                                                <button
                                                        required
                                                        class="textr inform" 
                                                        type='button'
                                                        onClick={()=>navigate('/select-meals')}>
                                                        {isMeal()}
                                                        
                                                </button>
                                                <label class="textr inform"  required>Transporte:</label>
                                                <button
                                                        required
                                                        class="textr inform" 
                                                        type='button'
                                                        onClick={()=>navigate('/select-transportation')}>
                                                        {isTransport()}
                                                        
                                                </button>
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
