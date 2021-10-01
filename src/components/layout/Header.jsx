import React from 'react'

const Header = (props) => {

    return (
        <div className="header">
            <div className="container">
                <div className="titulo">
                    <h1 className="title-h1 font-weight-900 text-light text-capitalize">
                        { props.titulo }
                    </h1>

                    {
                        !props.precio ? 
                            (
                                <h2 className="title-h1 font-weight-900 text-light mobile_none text-capitalize">
                                    { props.idCliente }
                                </h2>
                            )
                            : 
                            (
                                <h2 className="title-h1 font-weight-900 text-light mobile_none text-capitalize">
                                    { props.precio }
                                </h2>
                            )
                    }
                </div>

                <div className="bajada">
                    <div className="bajada__left">
                        {
                            !props.proveedor ? 
                            (
                            <h4 className="title-h4 font-weight-700 text-light text-capitalize">
                                { props.razonSocial }  
                            </h4>
                            )
                            :
                            (
                            <h4 className="title-h4 font-weight-700 text-light">
                                { props.proveedor } 
                            </h4>
                            )
                        }

                            <h4 className="title-h4 font-weight-700 text-light">
                                { props.volumen }
                            </h4>

                        {
                            !props.producto ? 
                            ' '
                            : 
                            (
                                <h4 className="title-h4 font-weight-700 text-light mobile_none text-capitalize">
                                /  { props.producto }
                                </h4>
                            )
                            
                        }
                    </div>

                    <h5 className="text-small font-weight-500 text-light mobile_none">
                        { props.datoFour }
                    </h5>
                </div>

                <div className="text-m">
                    <h4 className="title-h4 font-weight-700 text-light text-capitalize">
                        { props.precio } 
                        { props.idCliente }
                    </h4>
                    <h5 className="text-small font-weight-500 text-light">
                        { props.datoFour }
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default Header
