import React from 'react'

const TitlePrincipal = (props) => {
    return (
        <div>
           <div className="titulo">
                <h1 className="title-h1 font-weight-900 text-light">{props.datoOne}</h1>
                <h2 className="title-h1 font-weight-900 text-light">{props.datoTwo}</h2>
            </div>
            <div className="bajada">
                <h4 className="title-h4 font-weight-700 text-light">{props.datoThree}</h4>
                <h5 className="text-small font-weight-500 text-light">{props.datoFour}</h5>
            </div>
        </div>
    )
}

export default TitlePrincipal
