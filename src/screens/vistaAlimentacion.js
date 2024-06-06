import { useNavigate } from 'react-router-dom';
import '../css/vistaAlimentacion.css';
import logo from '../img/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MealsItem } from '../items/MealsItem';
import { GenericView } from './GenericView';

function ViewMeals() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const handleCreateMeals = () => {
        navigate('/create-meal');
    };

    const [meals, setMeals] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');
    const [mealName, setMealName] = useState(null)
    //const [search, setSearch] = useState(false)

    useEffect(() => {
        console.log(mealName)
        if (!mealName){
            setMealName(null)
        }
        const fetchMeals = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/meals/page_meals',
                    {
                        name: mealName,
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
                setMeals(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        const countMeals = async () => {
            try {
                const response = await axios.get('http://localhost:9092/meals/count', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setNum(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        countMeals();
        fetchMeals();
    }, [token, mealName]);

    return (
        <GenericView
        Component = {MealsItem}
        items = {meals}
        setter = {setMealName}
        creation = {handleCreateMeals}
        title = 'Alimentacion'
        item = 'Nombre'
        canCreate = {true}
        ></GenericView>
    );
}

export { ViewMeals };
