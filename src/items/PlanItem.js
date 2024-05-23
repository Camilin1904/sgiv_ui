import React from 'react';
import '../css/items/PlanItem.css';

function PlanItem(props) {
    return (
      <>
  <div class="gjs-row" id="ibrpca" style={{height:'11vh'}}>
    <div class="gjs-cell" id="i61jk8">
      <div id="iwqlh" className='PlanItem-code'>  {props.code} 
      </div>
    </div>
    <div class="gjs-cell">
      <div id="iymgd" class="gjs-row">
        <table>
          <td>
            <tr>
              <div id="ipzs3" classname="PlanItem-startDate">Start Date: {props.startDate.toDateString()}
              </div>
            </tr>
            <tr>
              <div id="izkt1" classname="PlanItem-client">Client: {props.client.firstName} {props.client.lastName}
              </div>
            </tr>
          </td>
          <td>
            <tr>
              <div id="itoty" classname="PlanItem-endDate">End Date: {props.endDate.toDateString()}
              </div>
            </tr>
            <tr>
              <div id="iqit6" classname="PlanItem-numberOfPeople">Number of People: {props.numberOfPeople}
              </div>
            </tr>
          </td>
        </table>
      </div>
    </div>
    <div class="gjs-cell" id="i0i4xc">
      <div id="imv6n-3" class="gjs-cell">
        <div id="ihhc9-3" class="gjs-cell1">
          <button type="button" id="ih3zn-3" style={{width:'100%', marginBottom:'2vh', height: '3vh'}}>Mas Info</button>
        </div>
        <button type="button" id="idwt7-3" style={{width:'100%', height: '3vh'}}>Editar</button>
      </div>
    </div>
  </div>
<br />
</>
    );
}

export { PlanItem };
