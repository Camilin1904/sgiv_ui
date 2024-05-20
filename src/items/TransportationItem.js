import React from 'react';
import './TransportationItem.css';

function TransportationItem(props) {
    return (
      <li className='TransportationItem'>
        <h2 className='TransportationItem-name'>{props.name}</h2>
        <p className='TransportationItem-description'>{props.description}</p>
        <p className={`TransportationItem-status ${props.status === 'operational' && 'TransportationItem-status--operational'}`}>{props.status}</p>
      </li>
    );
}

export { TransportationItem };
