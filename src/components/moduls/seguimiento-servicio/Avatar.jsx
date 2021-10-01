import React from 'react'

const Avatar = (props) => {
    return (
        <div>
            <div className="ico">
                <div className="icon-seguimiento">
                    <img src={props.img} alt="" draggable="false"/>
                </div>
            </div>
        </div>
    )
}

export default Avatar
