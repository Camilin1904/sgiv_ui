import logo from '../img/logo.png';

import '../css/items/TopBar.css';


function TopBar(props){

    return (
        <>
        <div id="i10d" class="gjs-row">
          <div id="ilv1" class="gjs-cell">
            <div class="gjs-row" id="ibzy2">
              <div class="gjs-cell" id="i526g">
                <img id="ijcaw" src={logo} />
                </div>
              <div class="gjs-cell" id="ikt9w">
                <div id="iah6o2">{props.title}
                  <br/>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export {TopBar}