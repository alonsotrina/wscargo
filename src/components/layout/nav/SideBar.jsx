import React from 'react'
import M from "materialize-css/dist/js/materialize.min.js";
import IconsNav from '../../../assets/img/IconsNav'
import { Link } from 'react-router-dom'
import { SibeBarData } from './SideBarData'
import SubMenu from './SubMenu'



const SideBar = () => {

    React.useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, { edge: 'left' });

    }, [])


    React.useEffect(() => {
        var elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {});

    }, [])

    return (
        <div>
            <nav>
                <div className="nav_icon">
                    {/* icon nav */}
                    <Link to="#"
                        data-target="slide-out"
                        className="sidenav-trigger show-on-large"
                    >
                        <i className="material-icons">sort</i>
                    </Link>

                    <Link to="/home"
                        className="nav_logo">
                        <img src={IconsNav.logoWscargo} alt="" draggable="false" />
                    </Link>
                </div>

                {/* nav right */}
                <div className="nav_right">
                    <Link to="#"
                        // btn 
                        className="nav_right-link link--none">
                        <img className="icons" src={IconsNav.iconWhatsapp} alt="" /> Ejecutivo
                    </Link>

                    <Link to="#"
                        // dropdown idioma
                        className='nav_right-link dropdown-trigger link--none'
                        data-target='dropdown1'>

                        <img className="icons" src={IconsNav.iconIdioma} alt="" /> Idioma
                        <i className="material-icons">arrow_drop_down </i>
                    </Link>

                    <Link to="#"
                        // dropdown user 
                        className='nav_right-link dropdown-trigger'
                        data-target='dropdown2'>

                        <span>usuario</span>
                        <img className="icons-user" src={IconsNav.iconUser} alt="" />
                        <i className="material-icons">arrow_drop_down </i>
                    </Link>
                </div>

                {/* --> dropdown idioma <-- */}
                <ul id='dropdown1' className='dropdown-content'>
                    <li><Link to="#">English</Link></li>
                    <li><Link to="#">Spaninsh</Link></li>
                    <li><Link to="#">French</Link></li>
                    <li><Link to="#">Italian</Link></li>
                </ul>

                {/* --> dropdown perfil <-- */}
                <ul id='dropdown2' className='dropdown-content'>
                    <li><Link to="#">Perfil</Link></li>
                    <li><Link to="#">configuración</Link></li>
                    <li><Link to="#">Cerrar Sesión</Link></li>
                </ul>
            </nav>

            {/* --> slide nav <-- */}
            <ul id="slide-out" className="sidenav">
                <li>
                    <div class="user-view">
                        <img src={IconsNav.logoWscargo} />
                    </div>
                </li>

                <li><a class="subheader">Perfil Cliente</a></li>

                {
                    // map 
                    SibeBarData.map((item, index) => (
                        <SubMenu item={item} key={index} />
                    ))
                }
            </ul>
        </div>
    )
}

export default SideBar
