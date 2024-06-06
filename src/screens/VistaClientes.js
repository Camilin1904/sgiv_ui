import { useNavigate } from 'react-router-dom';
import '../css/vistaClientes.css';
import logo from '../img/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ClientItem } from '../items/ClientItem';
import { GenericView } from './GenericView';

function ViewClients() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const handleCreateClient = () => {
        navigate('/create-client');
    };

    const [clients, setClients] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');
    const [id, setID] = useState(null);

    useEffect(() => {
        if(!id){
            setID(null);
        }
        const fetchClients = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/client/page_client',
                    {
                        idNum: id,
                        bDateLower: null,
                        bDateUpper: null,
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
                setClients(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const countClients = async () => {
            try {
                const response = await axios.get('http://localhost:9092/client/count', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setNum(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        countClients();
        fetchClients();
    }, [token, id]);

    return  (
        <GenericView
        Component = {ClientItem}
        items = {clients}
        setter = {setID}
        creation = {handleCreateClient}
        title = 'Clientes'
        item = 'Identificación'
        canCreate = {true}
        ></GenericView>
    );
}

export { ViewClients };
