import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SelectDestinationItem } from '../../items/SelectDestinationItem';
import { GenericView } from '../GenericView';
import { SelectTransportationItem } from '../../items/SelectTransportationItem';

function SelectTransportation() {
    const navigate = useNavigate();

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
        Component = {SelectTransportationItem}
        items = {transportation}
        setter = {setName}
        creation = {null}
        title = 'Transporte'
        item = 'Nombre'
        canCreate = {false}
        ></GenericView>
    );
}

export { SelectTransportation };
