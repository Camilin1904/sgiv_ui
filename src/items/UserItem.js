import React from 'react';
import '../css/items/UserItem.css';

function UserItem(props) {
    return (
      <li className='UserItem'>
        <h2 className='UserItem-username'>{props.username}</h2>
        <p className='UserItem-id'>ID: {props.id}</p>
        <p className='UserItem-creationDate'>Creation Date: {props.creationDate.toDateString()}</p>
        <p className='UserItem-email'>Email: {props.email}</p>
        <p className='UserItem-status'>Status: {props.status}</p>
        <p className='UserItem-type'>Type: {props.type.name}</p>
      </li>
    );
}

export { UserItem };
