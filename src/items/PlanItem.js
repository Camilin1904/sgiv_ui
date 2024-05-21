import React from 'react';
import '../css/items/PlanItem.css';

function PlanItem(props) {
    return (
      <>
      <body id="ii2r">
  <div class="gjs-row" id="ibrpca">
    <div class="gjs-cell" id="i61jk8">
      <div id="iwqlh" className='PlanItem-code'>  {props.code} 
      </div>
    </div>
    <div class="gjs-cell">
      <div id="iymgd" class="gjs-row">
        <div id="i16n1" class="gjs-cell">
          <div id="ipzs3" classname="PlanItem-startDate">Start Date: {props.startDate.toDateString()}
          </div>
          <div id="izkt1" classname="PlanItem-client">Client: {props.client.firstName} {props.client.lastName}
          </div>
        </div>
        <div id="i0xuo" class="gjs-cell">
          <div id="itoty" classname="PlanItem-endDate">End Date: {props.endDate.toDateString()}
          </div>
          <div id="iqit6" classname="PlanItem-numberOfPeople">Number of People: {props.numberOfPeople}
          </div>
        </div>
      </div>
    </div>
    <div class="gjs-cell" id="i0i4xc">
      <div id="imv6n-3" class="gjs-cell">
        <div id="ihhc9-3" class="gjs-cell1">
          <button type="button" id="ih3zn-3">Mas Info</button>
        </div>
        <button type="button" id="idwt7-3">Editar</button>
      </div>
    </div>
  </div>
</body>
<br />
</>
    );
}

export { PlanItem };
