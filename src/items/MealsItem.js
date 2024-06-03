import React from 'react';

function MealsItem(props) {
  const meal = props.props;
  return (
    <>
      <div class="gjs-row" id="ibrpca" style={{height:'11vh'}}>
        <div class="gjs-cell">
          <div id="iymgd" class="gjs-row" style={{width:'auto', 'border-radius':'15px'}}>
            <table>
              <td style={{width:'50%'}}>
                  <h1>{meal.name}</h1>
              </td>
              <td style={{width:'50%', overflowY:'auto', wordWrap:'normal'}}>
                  Descripción: {meal.description}
              </td>
              
            </table>
          </div>
        </div>
        <button class='edit-button'>Editar</button>
      </div>
      <br />
    </>
    );
}

export { MealsItem };
