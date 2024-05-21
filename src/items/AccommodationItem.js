import React from 'react';
import '../css/items/AccommodationItem.css';

function AccommodationItem(props) {
    return (
      <li className='AccommodationItem'>
        <h2 className='AccommodationItem-id'>ID: {props.id}</h2>
        <p className='AccommodationItem-amountOfPeople'>People: {props.amountOfPeople}</p>
        <p className='AccommodationItem-planDetail'>Plan: {props.planDetail.name}</p>
        <p className='AccommodationItem-hotel'>Hotel: {props.hotel.name}</p>
        <p className={`AccommodationItem-status ${props.status === 'booked' && 'AccommodationItem-status--booked'}`}>{props.status}</p>
      </li>
    );
}

export { AccommodationItem };
