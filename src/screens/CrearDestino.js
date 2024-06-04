import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/crearDestino.css';
import { TopBar } from '../items/TopBar';
import axios from 'axios';

function CrearDestino() {
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

    return (
        <div id="ii2r">
            <TopBar title={'Registrar Destino'} />
            <div id="ipbh" className="gjs-row">
                <div id="iw09o" className="gjs-cell">
                    <div id="igqg" className="gjs-row">
                        <div id="is6bi" className="gjs-row">
                            <form>
                                <div id="ib7yb" className="gjs-cell">
                                    <div id="ijwtz" className="gjs-row" style={{ height: '10vh' }}>
                                        <div id="ioj32" className="gjs-cell" style={{ height: '10vh' }}>
                                            <div id="ia4mh">Ingrese la información del destino</div>
                                        </div>
                                        <div id="iqf2j" className="gjs-cell" style={{ height: '10vh' }}>
                                            <button type="submit" id="in3fl">Registrar</button>
                                        </div>
                                    </div>
                                    <div id="iqx84" className="gjs-row" style={{ height: '30vh' }}>
                                        <div className="gjs-cell" style={{ height: '30vh' }}>
                                            <div id="igaf4" className="gjs-row" style={{ height: '30vh' }}>
                                                <div id="i0cl5" className="gjs-cell">
                                                    <div id="ityxu" className="texto">Nombre</div>
                                                    <input
                                                        type="text"
                                                        id="ioow3"
                                                        required
                                                        placeholder="Nombre"
                                                        className="texto"
                                                    />
                                                </div>
                                                <div id="i0a0k" className="gjs-cell">
                                                    <div id="iv07cp" className="texto">Codigo</div>
                                                    <input
                                                        type="text"
                                                        id="ixeik5"
                                                        required
                                                        placeholder="Codigo"
                                                        className="texto"
                                                    />
                                                </div>
                                                <div id="i0a0k" className="gjs-cell">
                                                <select>
                                                        <option value="" disabled selected>Seleccione un tipo</option>
                                                            <option key={'1'} value={'a'}>{'a'}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gjs-cell" style={{ height: '30vh' }}>
                                            <input type="file" onChange={handleImageChange} id='in3fl1' />
                                            {imagePreview && <img src={imagePreview} alt="Image Preview" style={{ width: '100%', height: 'auto' }} />}
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

export { CrearDestino };
