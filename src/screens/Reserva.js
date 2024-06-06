import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/reserva.css';
import { TopBar } from '../items/TopBar';

function Reserva() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token'); // Obtén el token del localStorage
    const [clients, setClients] = useState([]);
    const [client, setClient] = useState(null);
    const [planDetails, setPlanDetails] = useState([]);
    const [numberOfPeople, setNumberOfPeople] = useState('');
    const [code, setCode] = useState('');
    const [allPlanDetails, setAllPlanDetails] = useState([]);
    const [detail, setDetail] = useState({ startDate: '', endDate: '', planDetail: null });
    const [user, setUser] = useState(null)

    useEffect(() => {

        const userFetch =async ()=>{ 
            await axios.get('http://localhost:9092/users/get', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {setUser(response.data)});}

        const fetchPlanDetails = async () => {
            try {
                const response = await axios.get('http://localhost:9092/plan_detail/get_all', {
                    headers: { 'Authorization': `Bearer ${token}` } 
                });
                setAllPlanDetails(response.data);
            } catch (error) {
                console.error('Error fetching plan details:', error);
            }
        };
        const fetchClients = async () => {
            try {
                const response = await axios.get('http://localhost:9092/client/get_all', {
                    headers: { 'Authorization': `Bearer ${token}` } 
                });
                setClients(response.data);
            } catch (error) {
                console.error('Error fetching clients:', error);
            }
        };
        userFetch();
        fetchPlanDetails();
        fetchClients();
    }, [token]);

    const handleAddDetail = () => {
        setPlanDetails([...planDetails, detail]);
        setDetail({ startDate: '', endDate: '', planDetail: null });
    };

    const handleCreatePlan = async () => {
        const planDTO = {
            code,
            numberOfPeople,
            client,
            user,
            status: 'Active',
            planDetails
        };

        try {
            const response = await axios.post('http://localhost:9092/plan/create', planDTO, {
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                navigate('/plans'); // Navigate to the plans list
            } else {
                console.error('Failed to create plan');
            }
        } catch (error) {
            console.error('Failed to create plan:', error);
        }
    };

    return (
        <div>
            <TopBar title={'Registrar Plan'} />
            <div id="ii2r">
                <div id="ipbh" className="gjs-row">
                    <div className="gjs-cell">
                        <div id="igqg" className="gjs-row">
                            <div id="ies5" className="gjs-cell">
                                <div id="ix0m" className="gjs-row">
                                    <div id="iagjee" className="gjs-cell">
                                        <div id="ie43l">Crear plan
                                            <br />
                                        </div>
                                    </div>
                                    <div id="ij1vb" className="gjs-cell">
                                        <div id="ix2th" className="gjs-roww">
                                            <div id="itqtm" className="gjs-cell">
                                                <select
                                                    value={client ? client.id : ''}
                                                    onChange={e => {
                                                        const selectedClient = clients.find(c => c.id.toString() === e.target.value);
                                                        setClient(selectedClient);
                                                    }}
                                                >
                                                    <option value="" disabled>Seleccione un cliente</option>
                                                    {clients.map(client => (
                                                        <option key={client.id} value={client.id}>
                                                            {client.firstName} {client.lastName}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div id="i3d5o" className="gjs-cell">
                                                <input type="text" placeholder="Código" value={code} onChange={e => setCode(e.target.value)} />
                                            </div>
                                            <div id="i3d5o" className="gjs-cell">
                                                <input type="number" placeholder="Número de personas" value={numberOfPeople} onChange={e => setNumberOfPeople(e.target.value)} />
                                            </div>
                                            <div id="i3d5o" className="gjs-cell">
                                                <select
                                                    value={detail.planDetail ? detail.planDetail.id : ''}
                                                    onChange={e => {
                                                        const selectedDetail = allPlanDetails.find(d => d.id.toString() === e.target.value);
                                                        setDetail({ ...detail, planDetail: selectedDetail });
                                                    }}
                                                >
                                                    <option value="" disabled>Seleccione un detalle</option>
                                                    {allPlanDetails.map(planDetail => (
                                                        <option key={planDetail.id} value={planDetail.id}>
                                                            {planDetail.name}
                                                        </option>
                                                    ))}
                                                </select>
                                                <input type="date" placeholder="Fecha inicio" value={detail.startDate} onChange={e => setDetail({ ...detail, startDate: e.target.value })} />
                                                <input type="date" placeholder="Fecha fin" value={detail.endDate} onChange={e => setDetail({ ...detail, endDate: e.target.value })} />
                                                <button type="button" onClick={handleAddDetail}>Agregar Detalle</button>
                                            </div>
                                        </div>
                                        <div id="isr62" className="gjs-rowww">
                                            {planDetails.map((detail, index) => (
                                                <div key={index} className='lista'>
                                                <span>Detalle ID: {detail.planDetail ? detail.planDetail.id : 'N/A'}</span>
                                                <span>Fecha inicio: {detail.startDate}</span>
                                                <span>Fecha fin: {detail.endDate}</span>
                                                </div>
                                            ))}
                                            </div>
                                        <div id="iwtke" className="gjs-roww">
                                            <div id="ijpuy" className="gjs-cell">
                                                <button type="button" id="if9va" className="boton" onClick={handleCreatePlan}>Crear</button>
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
    );
}

export { Reserva };
