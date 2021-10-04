import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js";

const Maps = (props) => {
    React.useEffect(() => {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, { });

    }, [])

    return (
        <div className="component-map">
            <h4 className="title-h4 font-weight-800 padding-subtitle">
                {props.titulo}
            </h4>

            <div className="mapa">
                {/* dropdown mapar ver direciones */}
                <a  className='dropdown dropdown-trigger text-small font-weight-500' 
                    href='#'
                    data-target='dropdown4'>
                    direcciones
                    <i className="material-icons">arrow_drop_down</i>
                </a>

                <ul id='dropdown4' className='dropdown-content'>
                    <li><a href="#!">Av. Andrés Bello 2299</a></li>
                    <li><a href="#!">Canal del carmen 550</a></li>
                    <li><a href="#!">Los trapenses 5678</a></li>
                </ul>

                {/* aca va el mapa */}
                <div className="direccion">
                    <h3 className="title-h3 font-weight-900">Av. andres bello #48587</h3>
                    <p className="text-small font-weight-500">Providencia, Santiago</p>
                </div>
            </div>
        </div>
    )
}

export default Maps
