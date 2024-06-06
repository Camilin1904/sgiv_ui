import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/homeViewer.css';
import { TopBar } from '../items/TopBar';  // Asegúrate de usar el nombre correcto para importar TopBar

function HomeViewer() {
    const navigate = useNavigate();
    const username = localStorage.getItem('username');
    const token = localStorage.getItem('token');
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await axios.get('http://localhost:9092/destination/rand_image', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setImageSrc(response.data.image);
            } catch (error) {
                console.error('Error fetching random image:', error);
            }
        };

        fetchRandomImage();
    }, [token]);

    const handleLogout = () => {
        navigate('/');
    };

    const toPlanDetails = () => {
        navigate('/only-view-plan-details');
    };

    const toDestinations = () => {
        navigate('/only-view-destinations');
    };

    return (
        <div id="ii2r">
            <TopBar title={''} />
            <div id="ipbh" className="gjs-row">
                <div className="gjs-cell">
                    <div id="igqg" className="gjs-row">
                        <div className="gjs-cell">
                            <div id="ix0m" className="gjs-row">
                                <div id="iagje1" className="gjs-cell">
                                    <div id="ie43l">Bienvenido (visitante), {username}</div>
                                </div>
                                <div id="ij1vb" className="gjs-cell">
                                    <div id="isr62" className="gjs-row">
                                        <div className="gjs-cell" id="im38n">
                                            <button type="button" id="ihcz4" className="boton" onClick={toPlanDetails}>Ver planes</button>
                                        </div>
                                    </div>
                                    <div id="ifpef" className="gjs-row">
                                        <div className="gjs-cell" id="imhol">
                                        </div>
                                    </div>
                                    <div className="gjs-row" id="ihrt3">
                                        <div className="gjs-cell" id="ixe6i">
                                            <button type="button" className="boton" id="ixkml" onClick={toDestinations}>Ver destinos</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="ikv4" className="gjs-cell">
                            <div id="ilxmp1" className="gjs-row">
                                <div id="i1axm" className="gjs-cell">
                                    <div id="iwo55" className="gjs-row">
                                        <div id="i4o0i" className="gjs-cell">
                                            <div id="iri2j" className="gjs-row">
                                                <div id="i1hnz" className="gjs-cell">
                                                    <div id="irp45">Recomendaciones</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="iuuwh" className="gjs-row"></div>
                                    <div className="gjs-row" id="ieh7d">
                                        <div className="gjs-cell">
                                            {imageSrc && <img id="idqhm" src={imageSrc} alt="Random Destination" />}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { HomeViewer };
