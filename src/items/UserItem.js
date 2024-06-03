import React from 'react';
import '../css/items/UserItem.css';

function UserItem(props) {

  const user = props.props
    return (
      <>
<div class="gjs-row" id="ibrpca" style={{height:'11vh'}}>
  <div class="gjs-cell" id="i61jk8">
    <div id="iwqlh" className='PlanItem-code'>  {user.username}
    </div>
  </div>
  <div class="gjs-cell">
    <div id="iymgd" class="gjs-row">
      <table>
        <td>
          <tr>
            ID: {user.id}
          </tr>
          <br/>
          <tr>
            Fecha de Creation:{user.creationDate}
          </tr>
        </td>
        <td>
          <tr>
            Email: {user.email}
          </tr>
          <br/>
          <tr>
            Tipo: {user.type.name}
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

export { UserItem };
