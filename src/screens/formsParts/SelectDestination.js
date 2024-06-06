import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SelectDestinationItem } from '../../items/SelectDestinationItem';
import { GenericView } from '../GenericView';

function SelectDestinations() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const handleCreateDestination = () => {
        navigate('/create-destination');
    };

    const [destinations, setDestinations] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');
    const [name, setName] = useState(null)
    const [selDest, setSelDest] = useState(null)

    useEffect(() => {
        if(!name){
            setName(null);
        }
        const fetchDestinations = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/destination/page_dest',
                    {
                        name: name,
                        code: null,
                        status: 'Active',
                        type:null,
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
                setDestinations(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const countDestinations = async () => {
            try {
                const response = await axios.get('http://localhost:9092/destination/count', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setNum(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        countDestinations();
        fetchDestinations();
    }, [token, name]);

    return (
        <GenericView
        Component = {SelectDestinationItem}
        items = {destinations}
        setter = {setName}
        title = 'Selecionar destino'
        item = 'Destino'
        canCreate = {false}
        ></GenericView>
    );
}

export { SelectDestinations };
