import React from 'react';
import {Link, } from 'react-router-dom';

const navbar = () => (
    <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to='/'>
            <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
                GoBe
        </Link>
    </nav>
);

export default navbar;