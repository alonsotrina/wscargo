import React from 'react'
import { Link } from 'react-router-dom'



const Datos_tabs = ({ item }) => {
    return (
        <div>
            <div id={item.id}
                className="list-content">
                {
                    // ----->
                    item.content.map((item1, index1) => (
                        <div className="list" key={index1}>
                            {
                                // --->
                                item1.map((item2, index2) => (
                                    <div className="list_item" key={index2}>
                                        <div className="list_tittle text-small font-weight-400">
                                            {item2.title}
                                        </div>
                                        {
                                            // ---> condicion para obtener los link packingList y invoice
                                            !item2.descripcion ?
                                                (
                                                    <div className="list_desciption text-small font-weight-300">
                                                        <Link to="#" className="list_link link">{item2.packingList}</Link> <Link className="link" to="#">{item2.invoice}</Link>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <div className="list_desciption text-small font-weight-300">
                                                        {item2.descripcion}
                                                    </div>
                                                )
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Datos_tabs
