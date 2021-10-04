import React, { useState } from 'react'
import Header from "../../components/layout/Header";
import Tabs from "../../components/layout/Tabs";
import Collapse from '../../components/layout/Collapse';
import Maps from './map/Maps';
import List from './list/List';

import { DatosCardClientes } from './DatosCardClientes';
import { DatosFacturacion } from './DatosFacturacion';
import { DatosUser } from './DatosUser';



const Perfil = () => {

    // 
    const [modoPerfil, setModoPerfil] = useState(false)

    // funcion onclick
    const perfilActivo = item => {
        console.log(item)
        setModoPerfil(true)
    }

    return (
        <div>
            {
                // condicion header
                modoPerfil ?
                    (
                        <Header
                            titulo='Evidal'
                            idCliente={'ID ' + 2500}
                            razonSocial={'razón social' + ' / ' + ' lorem ipsum'}
                        />

                    )
                    :
                    (
                        <Header
                            titulo='Usuarios'
                            precio=''
                            proveedor='Perfiles de clientes'
                        />
                    )
            }


            {
                // Información del seguimiento del servicio
                modoPerfil ?
                    (
                        <div className="container">
                            {/*  Lista de datos del usuario versión mobile */}
                            {
                                DatosFacturacion.map((item, index) => (
                                    <List item={item} key={index} />
                                ))
                            }
                            <h4 className="title-h4 font-weight-800 padding-subtitle text-mobile"> Información del cliente</h4>
                            {
                                // Collapse información cliente mobile
                                DatosUser.map((item, index) => (
                                    <Collapse item={item} key={index} />
                                ))
                            }
                            {/* Tabs información cliente desktop */}
                            <Tabs titulo='Información del cliente' />

                            {/* aca va un mapa */}
                            <Maps titulo='Direcciones de despacho' />
                        </div>

                    )
                    : ''
            }

            <div className=
                {
                    // ClassName background gris del contenedor card
                    modoPerfil ? 'bg-gray' : 'content-margin-top'
                }
            >
                <div className="container">
                    {
                        // titulo seccion más pedidos
                        modoPerfil ? (<h4 className="title-h3 font-weight-800 p-user"> Otros Perfiles</h4>) : ''
                    }

                    {
                        // map card usuario
                        DatosCardClientes.map(item => (
                            <div className="card card-stacked"
                                key={item.id}
                                onClick={() => perfilActivo(item)}
                            >
                                <div className="card-content">
                                    <h4 className="title-h4 font-weight-700 text-capitalize">
                                        {item.tituloUsuario} / Id {item.idUser}
                                    </h4>

                                    <div className="card-datos">
                                        <p className="text font-weight-400 text-capitalize">
                                            Razón Social / {item.razonSocial}
                                        </p>
                                        {/* <p className="text font-weight-400 text-capitalize">
                                            <strong>Id {item.idUser}</strong>
                                        </p> */}
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

export default Perfil
