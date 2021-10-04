import React, { useEffect } from 'react'
import Title_ProgressBar from './Title_ProgressBar'
import M from "materialize-css";
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressBar = () => {

    const percentage = 1;

    useEffect(() => {
        const elements = document.querySelectorAll('select');
        var instance = M.FormSelect.init(elements, {});
    }, []);

    return (
        <div className="seguimiento">
            <Title_ProgressBar
                estado='1 / 5'
                formaRetiro='bodega'
                mensaje='Lo sentimos, tus paquetes aún no han llegado a nuestras bodegas en China. Continuamos gestionado.'
            />

            {/* Progress bar desktop */}
            <ul id="progressbar">
                <li className="active text-small font-weight-500">Bodegas China</li>
                <li className="active text-small font-weight-500">Espera consolidación</li>
                <li className="text-small font-weight-500">En transito</li>
                <li className="text-small font-weight-500">Revisión aduana</li>
                <li className="text-small font-weight-500">Bodegas  WS cargo</li>
            </ul>

            {/* Progress bar mobile */}
            <div className="row Progressbar-circle">
                <div class="col s6">
                    <CircularProgressbar
                        value={20}
                        text={`${percentage} / 5`}
                        className="hola"
                        strokeWidth={12}

                        styles={{
                            path: {
                                // 
                                stroke: '#FF2020',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                            },
                            // Customize the circle behind the path, i.e. the "total progress"
                            trail: {
                                // Trail color
                                stroke: '#DBDBDB',
                                strokeLinecap: 'round',
                            },
                            // text
                            text: {
                                // Text color
                                fill: '#3C3C3C',
                                // Text size
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }
                        }}
                    />
                </div>

                {/* lista de las etapas del seguimeinto */}
                <div class="col s6 item">
                    <ul>
                        <li className="active text-small font-weight-500">Bodegas China</li>
                        <li className="active text-small font-weight-500">Espera consolidación</li>
                        <li className="text-small font-weight-500">En transito</li>
                        <li className="text-small font-weight-500">Revisión aduana</li>
                        <li className="text-small font-weight-500">Bodegas  WS cargo</li>
                    </ul>
                </div>
            </div>

            <div className="content-buttons">
                <button className="button button-outline-dark button-mobile">
                    <FaWhatsapp /> Ejecutivo
                </button>
                {/* btn pagar <button class="button button-primary mobile-none">pagar</button> */}
            </div>

            {/* link para descargar la propuesta comercial */}
            <p className="text-small font-weight-500 propuesta-comercial">
                Si quieres saber más información sobre la propuesta comercial pincha
                <Link className="link" to="#">
                    aquí
                </Link>
            </p>
        </div>
    )
}

export default ProgressBar
