import React from 'react'

const List = ({ item }) => {
    return (
        <div>
            <div className="list list-mobile">
                {
                    // ----->
                    item.content.map((item1, index1) => (
                        <div  key={index1}>
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
            </div>
        </div>
    )
}

export default List
