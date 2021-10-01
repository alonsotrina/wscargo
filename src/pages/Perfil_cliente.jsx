import React, { useState } from 'react'
import Header from "../components/layout/Header";
import Tabs from "../components/layout/Tabs";
import { DatosCardClientes } from '../components/layout/DatosCardClientes';
import Collapse from '../components/layout/Collapse';
import Avatar from '../components/moduls/seguimiento-servicio/Avatar';
import IconsSeguimiento from '../assets/img/IconsSeguimiento'
import MapUser from '../components/layout/MapUser';
import List from '../components/layout/List';

import { DatosFacturacion } from '../components/layout/DatosFacturacion';
import { DatosUser } from '../components/layout/DatosUser';



const Perfil_cliente = () => {

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
                        <Avatar img={IconsSeguimiento.iconUser} />
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
                        <MapUser titulo='Direcciones de despacho' />
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
                        modoPerfil ? (<h4 className="title-h3 font-weight-800 p-user"> Otros Perfiles</h4>): ''
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

export default Perfil_cliente
