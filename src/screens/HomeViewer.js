import { useNavigate } from 'react-router-dom';
import '../css/homeViewer.css';
import logo from '../img/logo.png';

function HomeViewer(){
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const token = localStorage.getItem('token')
    const handleLogout = () => {
      navigate('/')
    };

    return (
    <body id="ii2r">
        <div id="i10d" class="gjs-row">
            <div id="ilv1" class="gjs-cell">
            <img id="ijcaw" src={logo}/>
            </div>
        </div>
        <div id="ipbh" class="gjs-row">
            <div class="gjs-cell">
            <div id="igqg" class="gjs-row">
                <div class="gjs-cell">
                <div id="ix0m" class="gjs-row">
                    <div id="iagje" class="gjs-cell">
                    <div id="ie43l">Bienvenido (visitante), {username}
                    </div>
                    </div>
                    <div id="ij1vb" class="gjs-cell">
                    <div id="isr62" class="gjs-row">
                        <div class="gjs-cell" id="im38n">
                        <button type="button" id="ihcz4" class="boton">Ver planes</button>
                        </div>
                    </div>
                    <div id="ifpef" class="gjs-row">
                        <div class="gjs-cell" id="imhol">
                        </div>
                    </div>
                    <div class="gjs-row" id="ihrt3">
                        <div class="gjs-cell" id="ixe6i">
                        <button type="button" class="boton" id="ixkml">Ver destinos</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div id="ikv4" class="gjs-cell">
                <div id="ilxmp" class="gjs-row">
                    <div id="i1axm" class="gjs-cell">
                    <div id="iwo55" class="gjs-row">
                        <div id="i4o0i" class="gjs-cell">
                        <div id="iri2j" class="gjs-row">
                            <div id="i1hnz" class="gjs-cell">
                            <div id="irp45">Recomendaciones
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="iuuwh" class="gjs-row">
                    </div>
                    <div class="gjs-row" id="ieh7d">
                        <div class="gjs-cell">
                        <img id="idqhm" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3R5bGU9ImZpbGw6IHJnYmEoMCwwLDAsMC4xNSk7IHRyYW5zZm9ybTogc2NhbGUoMC43NSkiPgogICAgICAgIDxwYXRoIGQ9Ik04LjUgMTMuNWwyLjUgMyAzLjUtNC41IDQuNSA2SDVtMTYgMVY1YTIgMiAwIDAgMC0yLTJINWMtMS4xIDAtMiAuOS0yIDJ2MTRjMCAxLjEuOSAyIDIgMmgxNGMxLjEgMCAyLS45IDItMnoiPjwvcGF0aD4KICAgICAgPC9zdmc+"/>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </body>
    )
}

export {HomeViewer}