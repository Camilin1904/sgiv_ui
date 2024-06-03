import { useNavigate } from 'react-router-dom';
import '../css/vistaClientes.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserItem } from '../items/UserItem';
import { TopBar } from '../items/TopBar';

function ViewUsers() {
    const navigate = useNavigate();

    const handleCreateUser = () => {
        navigate('/create-user');
    };

    const [users, setUsers] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/users/page_user',
                    {
                        idNum: null,
                        type: null,
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
                console.log(response.data);
                setUsers(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const countUsers = async () => {
            try {
                const response = await axios.get('http://localhost:9092/users/count', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setNum(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        countUsers();
        fetchUsers();
    }, [token]);

    return (
        <div id="ii2r">
            <TopBar title={'Usuarios'} />
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
                                                    <input type="text" id="im30us" placeholder="Usuario" />
                                                </div>
                                                <div className="gjs-cell" id="idgqzc">
                                                    <button type="button" id="i1aomg"></button>
                                                </div>
                                                <div className="gjs-cell" id="ivtoj3">
                                                    <button type="button" id="ivslaq" onClick={handleCreateUser}>Crear</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gjs-row1" id="ilh64g" style={{ height: '80%', overflowY: 'scroll' }}>
                                        <div className="gjs-cell" id="izbov7">
                                            <div className="gjs-row1" id="plan-list">
                                                {users.map((user) => (
                                                    <UserItem
                                                        key={user.id} // Assuming client object has an 'id' property
                                                        props={user}
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

export { ViewUsers };
