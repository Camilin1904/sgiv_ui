import React from 'react';
import '../css/items/DestinationItem.css';

function DestinationItem(props) {
    return (
      <li className='DestinationItem'>
        <h2 className='DestinationItem-name'>{props.name}</h2>
        <p className='DestinationItem-code'>Code: {props.code}</p>
        <p className='DestinationItem-creationDate'>Creation Date: {props.creationDate.toDateString()}</p>
        <p className='DestinationItem-status'>Status: {props.status}</p>
        <p className='DestinationItem-type'>Type: {props.type.name}</p>
        <p className='DestinationItem-user'>User: {props.user.username}</p>
      </li>
    );
}

export { DestinationItem };
