
import React from 'react'

const Card = ({item}) => {

    return (
        <div>
            <div className="col s12 m7" key={item.id}>
                <div className="card card-stacked">
                    <div className="card-content">

                        {
                            // condicional para mostrar titulo de la card
                            !item.tituloServicio ? 
                            (<h4 className="title-h4 font-weight-700 text-capitalize">{item.tituloUsuario}</h4>)
                            :
                            (<h4 className="title-h4 font-weight-700 text-capitalize">{item.tituloServicio}</h4>)
                        }

                        <div className="card-datos">
                            {
                                // condicionando los datos de la card
                                !item.razonSocial ? 
                                (
                                <p className="text font-weight-400 text-capitalize">{item.proveedores } Proveedores / {item.volumen} m³<span className="mobile_none"> / {item.producto}</span></p>
                                ): 
                                
                                (<p className="text font-weight-400 text-capitalize">Razón Social / {item.razonSocial}</p>)
                            }
                            
                            {
                                !item.idUser ?
                                (
                                    <p className="text font-weight-400 text-uppercase"><strong>$ {item.valor}</strong></p>
                                ):
                                (
                                    <p className="text font-weight-400 text-uppercase"><strong>Id {item.idUser}</strong></p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
