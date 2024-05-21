import React from 'react';
import '../css/items/PlanItem.css';

function PlanItem(props) {
    return (
      <div className='PlanItem'>
        <p className='PlanItem-id'>ID: {props.id}</p>
        <p className='PlanItem-code'>Code: {props.code}</p>
        <p className='PlanItem-numberOfPeople'>Number of People: {props.numberOfPeople}</p>
        <p className='PlanItem-startDate'>Start Date: {props.startDate.toDateString()}</p>
        <p className='PlanItem-endDate'>End Date: {props.endDate.toDateString()}</p>
        <p className='PlanItem-totalValue'>Total Value: ${props.totalValue}</p>
        <p className='PlanItem-creationDate'>Creation Date: {props.creationDate.toDateString()}</p>
        <p className='PlanItem-status'>Status: {props.status}</p>
        <p className='PlanItem-client'>Client: {props.client.firstName} {props.client.lastName}</p>
        <p className='PlanItem-user'>Creator user: {props.user.username}</p>
      </div>
    );
}

export { PlanItem };
