import React from 'react';
import { Link } from 'react-router-dom';
import { HOMEPAGE } from '../routes/urlRoutes';
import pageNotFound from '../assets/Page-404.svg';

import './style.css';


const NotFoundPage = () => {
    return (
        <div>
            <Link className="go-back-link" to={HOMEPAGE}>Go Back Home</Link>
            <img src={pageNotFound} alt="404" className="error-image"/>
        </div>
    );
}

export default NotFoundPage;
