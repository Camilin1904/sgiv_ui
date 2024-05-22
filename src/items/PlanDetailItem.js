import React from 'react';
import '../css/items/PlanDetailItem.css';

function PlanDetailItem(obj) {
  const props = obj.props;
    return (
      <>
      <body id="ii2r">
  <div class="gjs-row" id="ibrpca">
    <div class="gjs-cell" id="i61jk8">
      <div id="iwqlh" className='PlanItem-code'>  {props.name} 
      </div>
    </div>
    <div class="gjs-cell">
      <div id="iymgd" class="gjs-row">
        <div id="i16n1" class="gjs-cell">
          <div id="ipzs3" classname="PlanItem-startDate">Number of Days: {props.numberOfDays}
          </div>
          <div id="izkt1" classname="PlanItem-client">Number of Nights: {props.numberOfNights}
          </div>
        </div>
        <div id="i0xuo" class="gjs-cell">
          <div id="itoty" classname="PlanItem-endDate">Destination: {props.destination.name}
          </div>
          <div id="iqit6" classname="PlanItem-numberOfPeople">value: {props.value}
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
</>);
}

export { PlanDetailItem };
