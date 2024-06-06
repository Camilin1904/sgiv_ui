import { TopBar } from '../items/TopBar';


function GenericView(props){
    const Component = props.Component
    const items = props.items
    const setter = props.setter
    const creation = props.creation
    const title = props.title
    const item = props.item
    return (
        <div id="ii2r">
            <TopBar title={title} />
            <div id="ipbh" style={{ height: "85vh" }} className="gjs-row">
                <div className="gjs-cell">
                    <div id="igqg" className="gjs-row">
                        <div id="ikv4" className="gjs-cell">
                            <div id="ilxmp" className="gjs-row">
                                <div id="i1axm" className="gjs-cell">
                                    <div id="iwo55" className="gjs-row">
                                        <div id="i4o0i" className="gjs-cell">
                                            <div className="gjs-row" id="i6rii7">
                                                <div className="gjs-cell" id="i0ak2w">
                                                    <input type="text" id="im30us" placeholder={item} onChange={dest=>setter(dest.target.value)}/>
                                                </div>
                                                <div className="gjs-cell" id="idgqzc">
                                                    <button type="button" id="i1aomg"></button>
                                                </div>
                                                <div className="gjs-cell" id="ivtoj3">
                                                    <button type="button" id="ivslaq" onClick={creation}>Crear</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gjs-row1" id="ilh64g" style={{ height: '80%', overflowY: 'scroll' }}>
                                        <div className="gjs-cell" id="izbov7">
                                            <div className="gjs-row1" id="plan-list">
                                                {items.map((item) => (
                                                    <Component
                                                        props={item}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gjs-row" id="i39ss1">
                                <div className="gjs-cell" id="istsko">
                                    <div className="gjs-row" id="iu7isy">
                                        <div className="gjs-cell" id="i6hi6h">
                                            <button type="button" id="if0ynj">Anterior</button>
                                        </div>
                                        <div className="gjs-cell" id="ixsnst">
                                            <div className="gjs-row" id="i89pat">
                                                <div className="gjs-cell" id="ihtxki">
                                                    <input type="text" id="i46s8v" />
                                                </div>
                                                <div className="gjs-cell" id="i9i75f">
                                                    <button type="button" id="inpm0j"></button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="gjs-cell" id="izlfvz">
                                            <button type="button" id="isdsj6">Siguiente</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { GenericView }

