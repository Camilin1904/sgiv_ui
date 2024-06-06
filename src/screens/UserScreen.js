import { useNavigate } from 'react-router-dom';
import '../css/vistaClientes.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserItem } from '../items/UserItem';
import { GenericView } from './GenericView';

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
        <GenericView
        Component = {UserItem}
        items = {users}
        setter = {null}
        creation = {handleCreateUser}
        title = 'Usuarios'
        item = 'Usuario'
        ></GenericView>
    );
}

export { ViewUsers };
