import React from 'react';
import '../css/items/HotelItem.css';

function HotelItem(props) {
    return (
      <li className='HotelItem'>
        <h2 className='HotelItem-name'>{props.name}</h2>
        <p className='HotelItem-address'>{props.address}</p>
        <p className='HotelItem-phone'>{props.phone}</p>
        <p className='HotelItem-email'>{props.email}</p>
        <p className='HotelItem-websiteUrl'>{props.websiteUrl}</p>
        <p className={`HotelItem-status ${props.status === 'active' && 'HotelItem-status--active'}`}>{props.status}</p>
      </li>
    );
}

export { HotelItem };
