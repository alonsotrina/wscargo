import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js";

const Collapse = ({item}) => {
    // collpase
    React.useEffect(() => {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems, {});

    }, [])

    return (
        <div className="collapse">
            <ul className="collapsible">
                <li>                  
                    <div className="collapsible-header">
                        <h4 className="text font-weight-500 text-capitalize">{ item.titleEnlace } </h4>
                        <i className="material-icons">arrow_drop_down</i>
                    </div>

                    {
                        // ----->
                        item.content.map((item1, index1) => (   
                            <div className="collapsible-body" key={index1}>
                                {
                                    // --->
                                    item1.map((item2, index2) => (
                                        <div className="list_item" key={index2}>
                                            <div className="list_tittle text-small font-weight-400">
                                                {item2.title}
                                            </div>
                                            <div className="list_desciption text-small font-weight-300">
                                                {item2.descripcion}
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </li>
            </ul>
        </div>
    )
}

export default Collapse
