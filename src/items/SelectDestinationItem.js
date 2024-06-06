import React, { useEffect, useState } from 'react';
import '../css/items/DestinationItem.css';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useNavigate } from 'react-router-dom';

function SelectDestinationItem(props) {
    const dest = props.props;
    const [imgs, setImgs] = useState([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate()

    function handleSelect(selected){
        console.log(dest)
        localStorage.setItem('pddest', JSON.stringify(dest))
        navigate('/create-plan-detail')
    }

    

    useEffect(() => {
        const fetchImgs = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/destination/dest_img',
                    {
                        id: dest.id
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
    }, [dest.id, token]);

    return (
          <table>
            <td class='dest-items'>
                  <div class='dest-tittle'>
                    <h1 className='DestinationItem-name'>{dest.name}</h1>
                  </div>
                  <div class='buttons'>
                      <button class='edit' value={dest} onClick={handleSelect}>Select</button>
                  </div>
              
            </td>
            <td>
              <Carousel showThumbs={true}>
                  {imgs.map((image, index) => (
                      <div key={index}>
                          <img src={image.image} alt={`${dest.name} ${index + 1}`} />
                      </div>
                  ))}
              </Carousel>
            </td>
          </table>
    );
}

export { SelectDestinationItem };
