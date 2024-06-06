import { useNavigate } from 'react-router-dom';
import '../css/vistaReservas.css';
import logo from '../img/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PlanDetailItem } from '../items/PlanDetailItem';
import { GenericView } from './GenericView';

function ViewPlanDetail(){
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    
    function handleCreation(){
        navigate('/create-plan-detail')
    }


    const [planDetails, setPlanDetails] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');
    const [name, setName] = useState(null);
    const [page, setPage] = useState(localStorage.getItem('page'))
    const [maxPage, setMaxPage] = useState(0)

    useEffect(() => {
        if(!name){
            setName(null);
        }
        const fetchPlans = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/plan_detail/page_plan_detail',
                    {
                        name: name,
                        daysUpper: null,
                        daysLower: null,
                        nightsUpper: null,
                        nightsLower: null,
                        valueUpper: null,
                        valueLower: null,
                        status: 'Active',
                        size: 10,
                        page: page,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response)
                setPlanDetails(response.data.content);
            } catch (error) {
                console.log(error);
            }
        };

        const countPlans= async () => {
            try {
                const response = await axios.post('http://localhost:9092/plan_detail/countFilter',{
                    name: name,
                    daysUpper: null,
                    daysLower: null,
                    nightsUpper: null,
                    nightsLower: null,
                    valueUpper: null,
                    valueLower: null,
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


        countPlans();
        fetchPlans();
    }, [token, name]);



    return (
        <GenericView
        Component = {PlanDetailItem}
        items = {planDetails}
        setter = {setName}
        creation = {handleCreation}
        title = 'Detalles plan'
        item = 'Detalle plan'
        canCreate = {true}
        maxPage = {maxPage}
        page = {page}
        ></GenericView>
    )
}

export {ViewPlanDetail}