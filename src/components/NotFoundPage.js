import React from 'react';
import { Link } from 'react-router-dom';
import { HOMEPAGE } from '../routes/urlRoutes';

const NotFoundPage = () => {
    return (
        <div>
            <h1>Page not found</h1>
            <Link to={HOMEPAGE}>Go Back Home</Link>
        </div>
    );
}

export default NotFoundPage;
