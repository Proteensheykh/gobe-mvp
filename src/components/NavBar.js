import React from 'react';
import logo from '../assets/gobe_xmas.svg';

import './NavBar.css';

const navbar = () => (
    <header>
        <a href="/">
            <img src={logo} alt="gobe-logo" className="gobe-logo" />
        </a>
    </header>
);

export default navbar;