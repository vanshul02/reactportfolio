import React from 'react'


import './ServiceBox.css';
const ServiceBox = props => {
    return (
        <div className="service-box">
            <div className='logo'><i className={props.logo}></i></div>
            <h3 className="title">{props.title}</h3>
            <p>
                {props.children}
            </p>
        </div>
    )
}

export default ServiceBox
