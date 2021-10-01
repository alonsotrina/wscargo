import React, { useEffect } from 'react'
import M from "materialize-css";
import Datos_tabs from './Datos_tabs';
import { Datos } from './Datos';

const Tabs = (props) => {
    
    // tabs materialize
    useEffect(() => {
        const elements = document.querySelectorAll('.tabs');
        var instance = M.Tabs.init(elements, { onShow: 100 });
    }, []);


    return (
        <div className="container_tabs mobile_none">
            <h4 className="title-h4 font-weight-800 padding-subtitle">
                {props.titulo}
            </h4>  
            <ul className="tabs">
                {
                    //  link de tabs
                    Datos.map((item, index) => (
                        <li className="tab" key={index}>
                            <a href={item.idEnlace}> 
                                {item.titleEnlace}
                            </a>
                        </li>
                    ))
                }
            </ul>

            {
                // tabs content
                Datos.map((item,index) => (
                    <Datos_tabs item={ item } key={ index }/>
                ))
            }
        </div>
    )

}

export default Tabs
