import React from 'react';
import '../css/items/ClientItem.css';

function ClientItem(props) {
    return (
      <li className='ClientItem'>
        <h2 className='ClientItem-name'>{props.firstName} {props.lastName} {props.secondLastName}</h2>
        <p className='ClientItem-id'>ID: {props.id}</p>
        <p className='ClientItem-identificationNumber'>ID Number: {props.identificationNumber}</p>
        <p className='ClientItem-phone'>Phone: {props.phone1}, {props.phone2}</p>
        <p className='ClientItem-email'>Email: {props.email}</p>
        <p className='ClientItem-birthDate'>Birth Date: {props.birthDate.toDateString()}</p>
        <p className='ClientItem-gender'>Gender: {props.gender}</p>
        <p className='ClientItem-status'>Status: {props.status}</p>
        <p className='ClientItem-identificationType'>Identification Type: {props.identificationType.name}</p>
      </li>
    );
}

export { ClientItem };
