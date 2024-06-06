import { useNavigate } from 'react-router-dom';
import '../css/vistaAlimentacion.css';
import logo from '../img/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { TransportationItem } from '../items/TransportationItem';
import { GenericView } from './GenericView';

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
        <GenericView
        Component = {TransportationItem}
        items = {transportation}
        setter = {setName}
        creation = {handleCreateTransportation}
        title = 'Transporte'
        item = 'Nombre'
        ></GenericView>
    );
}

export { ViewTransportation };
