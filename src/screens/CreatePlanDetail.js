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
        console.log(nights)
        if(days>0){
            setNights(days-1)
        }
    }, [days])
    const [dest, setDest] = useState(JSON.parse(localStorage.getItem('pddest')))
    const [meals, setMeals] = useState(JSON.parse(localStorage.getItem('pdmeals')))
    const [transport, setTransport] = useState(JSON.parse(localStorage.getItem('pdtransport')))
    const [hotel, setHotel] = useState(JSON.parse(localStorage.getItem('pdhotel')))
    const [nights, setNights] = useState(0)
    const [numPeople, setNumPeople] = useState(localStorage.getItem('pdnumpeople'))

    const [user, setUser] = useState(null)

    
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
        if(!transport){
            return 'Seleccione un plan de transporte'
        }
        else{
            return transport.name
        }
    }

    function isHotel(){
        if(!hotel){
            return 'Seleccione un hotel'
        }
        else{
            return hotel.name
        }
    }
    
    function showHotel(){
        if(dest){
            return (
                <>
            <label class="textr inform"  required>Hotel:</label>
            <button
                    required
                    class="textr inform" 
                    type='button'
                    onClick={()=>navigate('/select-hotel')}>
                    {isHotel()}
                    
            </button></>)
        }
        else{
            return(<></>)
        }
    }

    function showAmPe(){
        console.log(hotel)
        if(hotel){
            return (
                <>
                    <label class="textr inform"  required>Cantidad de personas:</label>
                    <input class="textr inform" required placeholder='Cantidad de personas' onChange={(value)=>setNumPeople(value.target.value)}></input>
                </>)
        }
        else{
            return(<></>)
        }
    }
    const handleLogout = () => {
        navigate('/');
    };

    useEffect(()=>{
        const userFetch =async ()=>{ 
            await axios.get('http://localhost:9092/users/get', {
              headers: {
                  Authorization: `Bearer ${token}`
              }
          }).then(response => {setUser(response.data)});}
          userFetch();
    },[])

    function createPlanDetail(e) {
        console.log('aedoihsdigoiuosdfgigwqaeo;iufhaweiopghfbk;jawefgWAUIO;EFG;OQW[Ehfio')
        e.preventDefault();
        const createPD = async(acc) => {
            const hotelData = {
            id: null,
            name: name,
            value: value,
            numberOfDays: days,
            numberOfNights: nights,
            destination: dest,
            meals: meals,
            transportation: transport,
            accommodation: acc,
            user: user,
            status: 'Active'
            };
        
            await axios.post('http://localhost:9092/plan_detail/create', hotelData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
            });
        };
        const aaaa = async () => await axios.post('http://localhost:9092/plan_detail/create_acc', {
            id:null,
            amountOfPeople:numPeople,
            hotel:hotel,
            status:'Active',
            user:user
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }

            }).then((response)=>response.data)
            .then((ac)=>{
                console.log(ac)
                createPD(ac);
            });
            
        aaaa()
        
        
        
        
        navigate('/view-plan-details')
  
      }
    

    return (
        <div id="ii2r">
            <TopBar title={'Registrar Detalle plan'} />
            <div id="ipbh" className="gjs-row">
                <div id="iw09o" className="gjs-cell">
                    <div id="igqg" className="gjs-row">
                        <div id="is6bi" className="gjs-row">
                            <form onSubmit={createPlanDetail}>
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
                                                <input class="textr inform" required type='text' placeholder='Nombre' onChange={(name)=>setName(name.target.value)}></input>
                                                <label class="textr inform"  required>Numero de dias:</label>
                                                <input class="textr inform" required type='number' placeholder='Numero de dias' onChange={(days)=>setDays(days.target.value)}></input>
                                                <br />
                                                <label class="textr inform"  required>Numero de noches:{nights}</label>
                                                <label class="textr inform"  required>Destino:</label>
                                                <button
                                                        required
                                                        class="textr inform" 
                                                        type='button'
                                                        onClick={()=>navigate('/select-destination')}>
                                                        {isDest()}
                                                </button>
                                                {showHotel()}
                                            </div>
                                            <div class='colform'>
                                                <label class="textr inform"  required>Valor:</label>
                                                <input class="textr inform" required placeholder='Valor' onChange={(value)=>setValue(value.target.value)}></input>
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
                                                {showAmPe()}
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
