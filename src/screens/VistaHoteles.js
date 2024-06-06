import { useNavigate } from 'react-router-dom';
import '../css/vistaClientes.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { HotelItem } from '../items/HotelItem';
import { GenericView } from './GenericView';

function ViewHotels() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const handleCreateHotel = () => {
        navigate('/create-hotel');
    };

    const [hotels, setHotels] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');
    const [name, setName] = useState(null);

    useEffect(() => {
        if(!name){
            setName(null);
        }
        const fetchHotels = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/hotel/page_hotel',
                    {
                        name: name,
                        address: null,
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
                setHotels(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const countHotels = async () => {
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

        countHotels();
        fetchHotels();
    }, [token, name]);

    return (
        <GenericView
        Component = {HotelItem}
        items = {hotels}
        setter = {setHotels}
        creation = {handleCreateHotel}
        title = 'Hoteles'
        item = 'Hotel'
        canCreate = {true}
        ></GenericView>
    );
}

export { ViewHotels };
