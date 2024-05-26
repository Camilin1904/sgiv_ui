import React from 'react';
import '../css/items/PlanItem.css';

function PlanItem(props) {
    return (
      <>
  <div class="gjs-row" id="ibrpca" style={{height:'13vh'}}>
    <div class="gjs-cell" id="i61jk8">
      <div id="iwqlh" className='PlanItem-code'>  {props.code} 
      </div>
    </div>
    <div class="gjs-cell">
      <div id="iymgd" class="gjs-row">
        <table>
          <td>
            <tr style={{height:'fit-content'}}>
              Start Date: {props.startDate.toDateString()}
            </tr>
            <br />
            <tr>
              Client: {props.client.firstName} {props.client.lastName}
            </tr>
          </td>
          <td>
            <tr>
              End Date: {props.endDate.toDateString()}
            </tr>
            <br />
            <tr>
              Number of People: {props.numberOfPeople}
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
