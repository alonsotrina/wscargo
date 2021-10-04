import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SubMenu = ({ item }) => {

    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <div className="text-blue">
            <li>
                <NavLink to={item.path}
                        onClick={item.subNav && showSubnav}
                        activeClassName="activeo"
                        >
                        {item.title}
                    <div>
                        {
                            // --> condicion para mostar icon dropwon <-- //
                            item.SubMenu && SubMenu
                                ? item.iconClose
                                : item.subNav
                                ? item.iconOpen
                                : null
                        }
                    </div>
                </NavLink>
            </li>
            {
                subnav && item.subNav.map((item, index) => (
                    <li>
                        <Link to={item.path} key={index}>
                            {item.title}
                        </Link>
                    </li>
                ))
            }
        </div>
    )
}

export default SubMenu
