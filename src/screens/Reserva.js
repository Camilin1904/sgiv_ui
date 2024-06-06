import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/reserva.css';
import { TopBar } from '../items/TopBar';
import axios from 'axios';

function Reserva() {
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImagePreview(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    useEffect(() => {
        if (window.MultiSelectTag) {
            new window.MultiSelectTag('multis');
        } else {
            console.error('MultiSelectTag no está definido en window');
        }
    }, []);

    return (
        <div id="ii2r">
            <TopBar title={'Registrar Hotel'} />
            <div id="ipbh" className="gjs-row">
                <div id="iw09o" className="gjs-cell">
                    <div id="igqg" className="gjs-row">
                        <div id="is6bi" className="gjs-row">
                            <form>
                                <div id="ib7yb" className="gjs-cell">
                                    <div id="ijwtz" className="gjs-row" style={{ height: '10vh' }}>
                                        <div id="ioj32" className="gjs-cell" style={{ height: '10vh' }}>
                                            <div id="ia4mh">Ingrese la información del hotel</div>
                                        </div>
                                        <div id="iqf2j" className="gjs-cell" style={{ height: '10vh' }}>
                                            <button type="submit" id="in3fl">Registrar</button>
                                        </div>
                                    </div>
                                    <div id="iqx84" className="gjs-row" style={{ height: '30vh' }}>
                                        <div className="gjs-cell" style={{ height: '30vh' }}>
                                            <div id="igaf412" className="gjs-row" style={{ height: '30vh' }}>
                                                <div id="i0cl5" className="gjs-cell3">
                                                    <div id="ityxu" className="texto">No. Identificacion</div>
                                                    <input
                                                        type="text"
                                                        id="ioow3"
                                                        required
                                                        placeholder="No. Identificacion"
                                                        className="texto"
                                                    />
                                                </div>
                                                <div id="i0a0k" className="gjs-cell3">
                                                    <div id="iv07cp" className="texto">AQUI SE PONE EL VALOR sty</div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gjs-cell12" style={{ height: '30vh' }}>
                                            <div id="iv07cp" className="texto2">Planes seleccionados</div>
                                            <select name="multis[]" id="multis" multiple>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Reserva };
