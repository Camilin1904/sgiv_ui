import React from 'react';
import '../css/items/PlanDetailItem.css';

function PlanDetailItem(props) {
    return (
      <li className='PlanDetailItem'>
        <h2 className='PlanDetailItem-id'>ID: {props.id}</h2>
        <p className='PlanDetailItem-food'>Food: {props.food}</p>
        <p className='PlanDetailItem-transportation'>Transportation: {props.transportation.name}</p>
        <p className='PlanDetailItem-meals'>Meals: {props.meals.name}</p>
        <p className='PlanDetailItem-value'>Value: ${props.value}</p>
        <p className='PlanDetailItem-numberOfNights'>Nights: {props.numberOfNights}</p>
        <p className='PlanDetailItem-numberOfDays'>Days: {props.numberOfDays}</p>
        <p className='PlanDetailItem-creationDate'>Creation Date: {props.creationDate.toDateString()}</p>
        <p className='PlanDetailItem-status'>Status: {props.status}</p>
        <p className='PlanDetailItem-user'>User: {props.user.username}</p>
      </li>
    );
}

export { PlanDetailItem };
