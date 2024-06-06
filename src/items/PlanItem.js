import React from 'react';
// import '../css/items/PlanItem.css';

function PlanItem({ props, onEdit }) {
    return (
        <>
            <div className="gjs-row" id="ibrpca" style={{ height: '13vh' }}>
                <div className="gjs-cell" id="i61jk8">
                    <div id="iwqlh" className="PlanItem-code">{props.code}</div>
                </div>
                <div className="gjs-cell">
                    <div id="iymgd" className="gjs-row">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Número de Personas: {props.numberOfPeople}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fecha de Inicio: {new Date(props.startDate).toLocaleDateString()}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Fecha de Fin: {new Date(props.endDate).toLocaleDateString()}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Valor Total: {props.totalValue}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Cliente: {props.client.firstName} {props.client.lastName}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export { PlanItem };
