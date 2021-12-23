import React from 'react';
import Scrollspy from 'react-scrollspy';

import './NavLinks.css';

const NavLinks = props => {
    return <Scrollspy className='nav-links' items={['home', 'about', 'service', 'projects', 'contact']} currentClassName="is-current" offset={-400}>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#service"> SERVICE </a></li>
        <li><a href="#projects" > PROJECTS </a></li>
        <li><a href="#contact" > CONTACT </a></li>
    </Scrollspy>
};

export default NavLinks;