import { useNavigate } from 'react-router-dom';
import '../css/vistaAlimentacion.css';
import logo from '../img/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TransportationItem } from '../items/TransportationItem';
import { TopBar } from '../items/TopBar';

function ViewTransportation() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const handleCreateTransportation = () => {
        navigate('/create-transportation');
    };

    const [transportation, setTransportation] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');
    const [name, setName] = useState(null);

    useEffect(() => {
        const fetchTransportation = async () => {
            if(!name & name != null){
                setName(null)
            }
            try {
                const response = await axios.post(
                    'http://localhost:9092/transportation/page_transportation',
                    {
                        name: name,
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
                console.log(response);
                setTransportation(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const countTransportation = async () => {
            try {
                const response = await axios.get('http://localhost:9092/transportation/count', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setNum(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        countTransportation();
        fetchTransportation();
    }, [token, name]);

    return (
        <div id="ii2r">
            <TopBar title={'Transporte'} />
            <div id="ipbh" style={{ height: "85vh" }} className="gjs-row">
                <div className="gjs-cell">
                    <div id="igqg" className="gjs-row">
                        <div id="ikv4" className="gjs-cell">
                            <div id="ilxmp" className="gjs-row">
                                <div id="i1axm" className="gjs-cell">
                                    <div id="iwo55" className="gjs-row">
                                        <div id="i4o0i" className="gjs-cell">
                                            <div className="gjs-row" id="i6rii7">
                                                <div className="gjs-cell" id="i0ak2w">
                                                    <input type="text" id="im30us" placeholder="Plan" onChange={transportation=>setName(transportation.target.value)}/>
                                                </div>
                                                <div className="gjs-cell" id="ivtoj3">
                                                    <button type="button" id="ivslaq" onClick={handleCreateTransportation}>Crear</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gjs-row1" id="ilh64g" style={{ height: '80%', overflowY: 'scroll' }}>
                                        <div className="gjs-cell" id="izbov7">
                                            <div className="gjs-row1" id="plan-list">
                                                {transportation.map((transportation) => (
                                                    <TransportationItem
                                                        key={transportation.id} // Assuming client object has an 'id' property
                                                        props={transportation}
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
    );
}

export { ViewTransportation };
