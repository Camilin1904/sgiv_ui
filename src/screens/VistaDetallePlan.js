import { useNavigate } from 'react-router-dom';
import '../css/vistaReservas.css';
import logo from '../img/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PlanDetailItem } from '../items/PlanDetailItem';

function ViewPlanDetail(){
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const handleLogout = () => {
      navigate('/')
    };


    const [planDetails, setPlanDetails] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/plan_detail/page_plan_detail',
                    {
                        name: null,
                        daysUpper: null,
                        daysLower: null,
                        nightsUpper: null,
                        nightsLower: null,
                        valueUpper: null,
                        valueLower: null,
                        status: 'Active',
                        size: 10,
                        page: 0,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response)
                setPlanDetails(response.data.content);
            } catch (error) {
                console.log(error);
            }
        };

        const countPlans = async () => {
            try {
                const response = await axios.get('http://localhost:9092/plan_detail/count', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setNum(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        countPlans();
        fetchPlans();
    }, [token]);



    return (
<div id="ii2r">
            <div id="i10d" className="gjs-row">
                <div id="ilv1" className="gjs-cell">
                    <div className="gjs-row" id="ibzy2">
                        <div className="gjs-cell" id="i526g">
                            <img id="ijcaw" src={logo} alt="Logo" />
                        </div>
                        <div className="gjs-cell" id="ikt9w">
                            <div id="iah6o2">Detalles Plan</div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="ipbh" style={{height:"85vh"}} className="gjs-row">
                <div className="gjs-cell">
                    <div id="igqg"className="gjs-row">
                        <div id="ikv4" className="gjs-cell">
                            <div id="ilxmp" className="gjs-row">
                                <div id="i1axm" className="gjs-cell">
                                    <div id="iwo55" className="gjs-row">
                                        <div id="i4o0i" className="gjs-cell">
                                            <div className="gjs-row" id="i6rii7">
                                                <div className="gjs-cell" id="i0ak2w">
                                                    <input type="text" id="im30us" placeholder="Plan" />
                                                </div>
                                                <div className="gjs-cell" id="idgqzc">
                                                    <button type="button" id="i1aomg"></button>
                                                </div>
                                                <div className="gjs-cell" id="ivtoj3">
                                                    <button type="button" id="ivslaq">Crear</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gjs-row1" id="ilh64g" style={{height: '80%', overflowY:'scroll'}}>
                                        <div className="gjs-cell" id="izbov7">
                                          <div className="gjs-row1" id="plan-list">
                                            {planDetails.map((plan) => (
                                                    <PlanDetailItem
                                                    props = {plan}
                                                    />
                                                ))}
                                        </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="gjs-row" id="i39ss1">
                            <div className="gjs-cell" id="istsko">
                                <div className="gjs-row" id="iu7isy">
                                    <div className="gjs-cell" id="i6hi6h">
                                        <button type="button" id="if0ynj">Anterior</button>
                                    </div>
                                    <div className="gjs-cell" id="ixsnst">
                                        <div className="gjs-row" id="i89pat">
                                            <div className="gjs-cell" id="ihtxki">
                                                <input type="text" id="i46s8v" />
                                            </div>
                                            <div className="gjs-cell" id="i9i75f">
                                                <button type="button" id="inpm0j"></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gjs-cell" id="izlfvz">
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
    )
}

export {ViewPlanDetail}