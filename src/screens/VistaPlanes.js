import { useNavigate } from 'react-router-dom';
import '../css/vistaPlanes.css';
import logo from '../img/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PlanItem } from '../items/PlanItem';
import { GenericView } from './GenericView';

function ViewPlan() {
    const navigate = useNavigate();
    const [plans, setPlans] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');
    const [page, setPage] = useState(localStorage.getItem('page'))
    const [maxPage, setMaxPage] = useState(0)

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/plan/page_plan',
                    {
                        code: null,
                        tvm: null,
                        tvl: null,
                        clientName: null,
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
                setPlans(response.data.content);
            } catch (error) {
                console.log(error);
            }
        };

        const countPlans= async () => {
            try {
                const response = await axios.post('http://localhost:9092/plan/countFilter',{
                    code: null,
                    tvm: null,
                    tvl: null,
                    clientName: null,
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
    }, [token]);

    console.log(plans);
    console.log(num);

    return (
        <GenericView
        Component = {PlanItem}
        items = {plans}
        setter = {null}
        creation = {null}
        title = 'Planes'
        item = 'Plan'
        canCreate = {true}
        maxPage = {maxPage}
        page = {page}
        ></GenericView>
    );
}

export { ViewPlan };
