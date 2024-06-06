import { useNavigate } from 'react-router-dom';
import '../css/vistaClientes.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DestinationItem } from '../items/DestinationItem';
import { GenericView } from './GenericView';

function ViewDestinations() {
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

    const [page, setPage] = useState(localStorage.getItem('page'))
    const [maxPage, setMaxPage] = useState(0)

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

        const countDestinations= async () => {
            try {
                const response = await axios.post('http://localhost:9092/destination/countFilter',{
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

        countDestinations();
        fetchDestinations();
    }, [token, name]);

    return (
        <GenericView
        Component = {DestinationItem}
        items = {destinations}
        setter = {setName}
        creation = {handleCreateDestination}
        title = 'Destinos'
        item = 'Destino'
        canCreate = {true}
        maxPage = {maxPage}
        page = {page}
        ></GenericView>
    );
}

export { ViewDestinations };
