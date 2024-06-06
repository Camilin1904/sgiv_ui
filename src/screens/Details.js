import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../css/details.css';
import { TopBar } from '../items/TopBar';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Details() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const [mostReservedPlanDetail, setMostReservedPlanDetail] = useState({});
  const [plansCountByDate, setPlansCountByDate] = useState([]);
  const [topClients, setTopClients] = useState([]);

  useEffect(() => {
    const fetchMostReservedPlanDetail = async () => {
      try {
        const response = await axios.get('http://localhost:9092/stats/most-reserved-plan-detail', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setMostReservedPlanDetail(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchPlansCountByDate = async () => {
      try {
        const response = await axios.get('http://localhost:9092/stats/count-by-date-last-30-days', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setPlansCountByDate(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTopClients = async () => {
      try {
        const response = await axios.get('http://localhost:9092/stats/top-5-clients', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setTopClients(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMostReservedPlanDetail();
    fetchPlansCountByDate();
    fetchTopClients();
  }, [token]);

  const getLast30Days = () => {
    const result = [];
    for (let i = 29; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      result.push(date.toISOString().split('T')[0]);
    }
    return result;
  };

  const dates = getLast30Days();
  const data = dates.map(date => {
    const item = plansCountByDate.find(plan => plan.date === date);
    return item ? item.count : 0;
  });

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Número de reservas',
        data: data,
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: {
          maxTicksLimit: 10,
        },
      },
    },
  };

  return (
    <div id="ii2r">
      <TopBar title={'Detalles'} />
      <div id="detailsContainer" className="gjs-row">
        <div id="planDetails" className="gjs-cell">
          <h2>Plan más reservado:</h2>
          <p>Nombre: {mostReservedPlanDetail.name}</p>
          <p>Valor: ${mostReservedPlanDetail.value} por persona</p>
        </div>

        <div id="chartContainer" className="gjs-cell" style={{ width: '100%', height: '400px' }}>
          <h2>Número de planes reservados en los últimos 30 días:</h2>
          <Line data={chartData} options={chartOptions} />
        </div>

        <div id="topClientsContainer" className="gjs-cell">
          <h2>Top 5 clientes con más reservas:</h2>
          <ul>
            {topClients.map((client, index) => (
              <li key={index}>
                Nombre: {client.firstName} {client.lastName}
              </li>
            ))}
          </ul>
        </div>

        <div id="backButtonContainer" className="gjs-cell">
          <button onClick={() => navigate(-1)}>Volver</button>
        </div>
      </div>
    </div>
  );
}

export { Details };
