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
    const [page, setPage] = useState(localStorage.getItem('page'))
    const [maxPage, setMaxPage] = useState(0)


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
                        dID: null,
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

        const countHotels= async () => {
            try {
                const response = await axios.post('http://localhost:9092/hotel/countFilter',{
                    name: name,
                    address: null,
                    status: 'Active',
                    dID: null,
                    size: 10,
                    page: 0,
                }, 
                {
                    
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then(response=>response.data)
                .then((count)=>{
                    if(count>0){
                        console.log('adadasdasd')
                        console.log(count)
                        setMaxPage(count)
                    }
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
        maxPage = {maxPage}
        page = {page}
        ></GenericView>
    );
}

export { ViewHotels };
