import React, { useState, useEffect } from 'react'
import { DatosCardServicios } from './DatosCardServicios'
import { Datos } from './Datos';
import ProgressBar from './progressBar/ProgressBar';
import Header from '../../components/layout/Header';
import Tabs from "../../components/layout/Tabs";
import Collapse from '../../components/layout/Collapse';
import M from "materialize-css";


const Seguimiento = () => {

    // select
    useEffect(() => {
        const elements = document.querySelectorAll('select');
        var instance = M.FormSelect.init(elements, {});
    }, []);

    // useState mode servicio
    const [modoServicio, setModoServicio] = useState(false)

    // function  onclick cambiar el useState 
    const seguimiento = item => {
        console.log(item)
        setModoServicio(true)
        // scroll top para cambiar del servicio
    }

    return (
        <div>
            {
                // condicion header
                modoServicio ?
                    (
                        // header estado true
                        <Header
                            titulo='N° servicio 5'
                            precio={'$ ' + 100000}
                            proveedor={'45' + 'proveedores /'}
                            volumen={'100' + ' m³'}
                            producto='maquina trotadora'
                            datoFour='pago pendiente'
                        />

                    )
                    :
                    (
                        // header estado false
                        <Header
                            titulo='Seguimiento '
                            precio=''
                            proveedor='Seguimiento de todos tus pedidos'
                        />
                    )
            }


            {
                // Información del seguimiento del servicio
                modoServicio ?
                    (
                        <div className="container">
                            <ProgressBar />
                            <h4 className="title-h4 font-weight-800 padding-subtitle text-mobile"> Información de tu compra </h4>
                            {
                                // collapse información compra mobile
                                Datos.map((item, index) => (
                                    <Collapse item={item} key={index} />
                                ))
                            }

                            {/* tabs información compra desktop */}
                            <Tabs titulo='Información de tu compra' />
                        </div>

                    )
                    : ''
            }

            <div className=
                {
                    // ClassName background gris del contenedor card
                    modoServicio ? 'bg-gray' : ''
                }
            >
                <div className="container">
                    {/* {
                        // titulo seccion más pedidos
                        modoPedido ? (<h4 className="title-h3 font-weight-800 pa"> Más pedidos</h4>): ''
                    } */}

                    <div className=
                        {
                            // className margin-top
                            modoServicio ? 'content-select' : 'content-select margin-servicio'
                        }

                    >
                        {/* select seguimeinto del servicio */}
                        <div className="input-field">
                            <select>
                                <option value="" selected>Seguimiento Pedidos</option>
                                <option value="1">Bodegas China</option>
                                <option value="2">Espera Consolidación</option>
                                <option value="3">En Transito</option>
                                <option value="3">Revisión Aduana</option>
                                <option value="3">Bodegas WS cargo</option>
                            </select>
                        </div>
                    </div>

                    {
                        // map card servicios
                        DatosCardServicios.map(item => (
                            <div className="card card-stacked"
                                key={item.id}
                                onClick={() => seguimiento(item)}
                            >
                                <div className="card-content">
                                    <h4 className="title-h4 font-weight-700 text-capitalize">
                                        {item.tituloServicio}
                                    </h4>

                                    <div className="card-datos">
                                        <p className="text font-weight-400 text-capitalize">
                                            {item.proveedores} Proveedores /
                                            {item.volumen} m³
                                            <span className="mobile_none"> / {item.producto}</span>
                                        </p>
                                        <p className="text font-weight-400 text-capitalize">
                                            {/* <strong>$ {item.valor}</strong> */}
                                            {/* Pendiente */}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Seguimiento
