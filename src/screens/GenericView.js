import { TopBar } from '../items/TopBar';




function GenericView(props){
    const Component = props.Component
    const items = props.items
    const setter = props.setter
    const creation = props.creation
    const title = props.title
    const item = props.item
    const canCreate = props.canCreate
    const maxPage = props.maxPage
    const page = props.page
    localStorage.setItem('page', page)

    function create(){
        console.log(canCreate)
        if (canCreate){
            return (
                <div className="gjs-cell" id="ivtoj3">
                    <button type="button" id="ivslaq" onClick={creation}>Crear</button>
                </div>
            )
        }
        else{
            return (<></>)
        }
    }
    function isNext(){
        
        if(maxPage>parseInt(page)+1){
            return (
            <button id="isdsj6" onClick={() =>{localStorage.getItem('page')<maxPage?localStorage.setItem('page', parseInt(page)+1):console.log(maxPage)}}>Siguiente</button>
            )
        }
        else{
            return (<></>)
        }
    }

    function isPrev(){
        if(0<parseInt(page)){
            console.log(page)
            return (
                <button  onClick={() =>{localStorage.getItem('page')>0?localStorage.setItem('page', parseInt(page)-1):console.log(maxPage)}} id="if0ynj">Anterior</button>
            )
        }
        else{
            return (<></>)
        }
    }

    function isMore(){
        if(0<parseInt(page) | maxPage>parseInt(page)+1){
            return (
                <>
                <div className="gjs-cell" id="ihtxki">
                    <input type="text" id="i46s8v" />
                </div>
                <div className="gjs-cell" id="i9i75f">
                    <button type="button" id="inpm0j"></button>
                </div>
                </>
            )
        }
        else{
            return (<></>)
        }
    }

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
                                                    <input type="text" id="im30us" placeholder={item} onChange={dest => setter(dest.target.value)} />
                                                </div>
                                                <div className="gjs-cell" id="idgqzc">
                                                    <button type="button" id="i1aomg"></button>
                                                </div>
                                                {create()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="gjs-row1" id="ilh64g" style={{ height: '80%', overflowY: 'scroll' }}>
                                        <div className="gjs-cell" id="izbov7">
                                            <div className="gjs-row1" id="plan-list">
                                                {items.map((item) => (
                                                    <Component key={item.id} props={item} onEdit={creation} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="gjs-row" id="i39ss1">
                                <div className="gjs-cell" id="istsko">
                                    <form>
                                    <div className="gjs-row" id="iu7isy">
                                        <div className="gjs-cell" id="i6hi6h">
                                            {isPrev()}
                                        </div>
                                        <div className="gjs-cell" id="ixsnst">
                                            <div className="gjs-row" id="i89pat">
                                                {isMore()}
                                            </div>
                                        </div>
                                        <div className="gjs-cell" id="izlfvz">
                                            {isNext()}
                                        </div>
                                    </div>
                                    </form>
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
