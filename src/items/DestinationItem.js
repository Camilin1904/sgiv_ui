import React, { useEffect, useState } from 'react';
import '../css/items/DestinationItem.css';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function DestinationItem(props) {
    const dest = props.props;
    const token = localStorage.getItem('token');
    const onEdit = props.onEdit;

    return (
        <table>
            <tbody>
                <tr>
                    <td className='dest-items'>
                        <div className='dest-tittle'>
                            <h1 className='DestinationItem-name'>{dest.name}</h1>
                        </div>
                        <div className='buttons'>
                            <button className='more-info'>Más Información</button>
                            {onEdit!=false && <button className='edit'>Editar</button>}
                        </div>
                    </td>
                    <td>
                        <Carousel showThumbs={true}>
                            {dest.images.map((image, index) => (
                                <div key={index}>
                                    <img src={image.image} alt={`${dest.name} ${index + 1}`} />
                                </div>
                            ))}
                        </Carousel>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export { DestinationItem };
