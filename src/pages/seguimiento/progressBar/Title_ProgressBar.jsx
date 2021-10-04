import React from 'react'

const Title_ProgressBar = (props) => {
    return (
        <div>
            <h2 className="title-h2 font-weight-900">
                Estado de tu compra { props.estado }  
            </h2>
            <h4 className="title-h4 font-weight-700">
                Retiro en { props.formaRetiro }
            </h4>
            <p className="text font-weight-400">{ props.mensaje }</p>
        </div> 
    )
}

export default Title_ProgressBar
