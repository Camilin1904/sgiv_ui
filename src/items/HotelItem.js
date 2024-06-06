import React, { useEffect, useState } from 'react';
import '../css/items/DestinationItem.css';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function HotelItem(props) {
    const hotels = props.props;
    const [imgs, setImgs] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchImgs = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/hotel/hotel_img',
                    {
                        id: hotels.id
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response.data);
                setImgs(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchImgs();
    }, [hotels.id, token]);

    return (
          <table>
            <td class='dest-items'>
                  <div class='dest-tittle'>
                    <h1 className='DestinationItem-name'>{hotels.name}</h1>
                  </div>
              
            </td>
            <td>
              <Carousel showThumbs={true}>
                  {imgs.map((image, index) => (
                      <div key={index}>
                          <img src={image.image} alt={`${hotels.name} ${index + 1}`} />
                      </div>
                  ))}
              </Carousel>
            </td>
          </table>
    );
}

export { HotelItem };
