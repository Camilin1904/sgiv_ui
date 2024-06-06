import React from 'react';
// import '../css/items/PlanDetailItem.css';

function PlanDetailItem(obj) {
    const props = obj.props;
    const onEdit = obj.onEdit;

    return (
        <>
            <div className="gjs-row" id="ibrpca" style={{ height: '13vh' }}>
                <div className="gjs-cell" id="i61jk8">
                    <div id="iwqlh" className="PlanItem-code">{props.name}</div>
                </div>
                <div className="gjs-cell">
                    <div id="iymgd" className="gjs-row">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        Number of Days: {props.numberOfDays}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Number of Nights: {props.numberOfNights}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Destination: {props.destination.name}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Value: {props.value}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="gjs-cell" id="i0i4xc">
                    <div id="imv6n-3" className="gjs-cell">
                        <div id="ihhc9-3" className="gjs-cell1">
                            <button type="button" id="ih3zn-3" style={{ width: '100%', marginBottom: '2vh', height: '3vh' }}>Mas Info</button>
                        </div>
                        {(onEdit!=false) && (
                            <button type="button" id="idwt7-3" style={{ width: '100%', height: '3vh' }}>Editar</button>
                        )}
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export { PlanDetailItem };
