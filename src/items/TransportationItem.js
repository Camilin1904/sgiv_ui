import React from 'react';

function TransportationItem(props) {
  const transportation = props.props;
  return (
    <>
      <div class="gjs-row" id="ibrpca" style={{height:'11vh'}}>
        <div class="gjs-cell">
          <div id="iymgd1" class="gjs-row" style={{width:'auto', 'border-radius':'15px'}}>
            <table>
              <td style={{width:'50%'}}>
                  <h1>{transportation.name}</h1>
              </td>
              <td style={{width:'50%', overflowY:'auto', wordWrap:'normal'}}>
                  Descripción: {transportation.description}
              </td>
              
            </table>
          </div>
        </div>
      </div>
      <br />
    </>
    );
}

export { TransportationItem };
