import React from 'react';
import { Link } from 'react-router-dom';
import { HOMEPAGE } from '../routes/urlRoutes';
import pageNotFound from '../assets/Page-404.svg';

import './NotFoundPage.css';
import { Container } from 'react-bootstrap';


const NotFoundPage = () => {
    return (
        <Container>
            <Link className="go-back" to={HOMEPAGE}>Go Back Home</Link>
            <img src={pageNotFound} alt="404" className="error-image"/>
        </Container>
    );
}

export default NotFoundPage;
