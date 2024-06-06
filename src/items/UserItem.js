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
            Fecha de Creación: {user.creationDate}
          </tr>
        </td>
        <td>
          <tr>
            Correo: {user.email}
          </tr>
          <br/>
          <tr>
            Tipo: {user.type.name}
          </tr>
        </td>
      </table>
    </div>
  </div>
</div>
<br />
</>
    );
}

export { UserItem };
