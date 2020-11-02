import React from 'react';
import {Link, } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Navbar } from 'react-bootstrap';

import './style.css';

const navbar = () => (
    <header>
        <a href="/">
            <img src={logo} alt="gobe-logo" className="gobe-logo" />
        </a>
    </header>
);

export default navbar;