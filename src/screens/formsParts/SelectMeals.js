import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SelectMealsItem } from '../../items/SelectMealsItem';
import { GenericView } from '../GenericView';

function SelectMeals() {
    const navigate = useNavigate();

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
        Component = {SelectMealsItem}
        items = {meals}
        setter = {setMealName}
        creation = {null}
        title = 'Alimentacion'
        item = 'Nombre'
        canCreate = {false}
        ></GenericView>
    );
}

export { SelectMeals };
