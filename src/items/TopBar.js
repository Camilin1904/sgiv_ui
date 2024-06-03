import logo from '../img/logo.png';
import { useNavigate } from 'react-router-dom';
import '../css/items/TopBar.css';


function TopBar(props){
  const navigate = useNavigate()

  function handleLogout(){
    localStorage.setItem('token', null)
    navigate('/')
  }

    return (
        <>
        <div id="i10d" class="gjs-row">
          <div id="ilv1" class="gjs-cell">
            <div class="gjs-row" id="ibzy2">
              <div class="gjs-cell" id="i526g">
                <a href='/home-admin'><img id="ijcaw" src={logo} /></a>
                </div>
              <div class="gjs-cell" id="ikt9w">
                <div id="iah6o2">{props.title}
                  <br/>
                </div>
              </div>
              <div>
                <button id='logout' onClick={handleLogout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export {TopBar}