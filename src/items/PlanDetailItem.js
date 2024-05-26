import React from 'react';
//import '../css/items/PlanDetailItem.css';

function PlanDetailItem(obj) {
  const props = obj.props;
    return (
      <>
      <div class="gjs-row" id="ibrpca" style={{height:'13vh'}}>
        <div class="gjs-cell" id="i61jk8">
          <div id="iwqlh" className='PlanItem-code'>  {props.name} 
          </div>
        </div>
        <div class="gjs-cell">
          <div id="iymgd" class="gjs-row">
            <table>
              <td>
                <tr>
                  Number of Days: {props.numberOfDays}
                </tr>
                <br/>
                <tr>
                  Number of Nights: {props.numberOfNights}
                </tr>
              </td>
              <td>
                <tr>
                  Destination: {props.destination.name}
                </tr>
                <br/>
                <tr>
                  value: {props.value}
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

export { PlanDetailItem };
