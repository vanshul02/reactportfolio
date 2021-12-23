import React from 'react';

import Button from '../../FormElements/Button/Button'
import './ProjectBox.css';

const ProjectBox = props => {
    return (
        <div className="project-box">
            <div className="project-logo" style={{ backgroundImage: `url('/assets/images/logo/${props.logo}')` }}> </div>
            <h3 className="title">{props.title}</h3>
            <p>
                {props.children}
            </p>
            <Button inverse href={`${props.gitlink}`}>GitHub Link</Button>
        </div>
    )
}

export default ProjectBox
