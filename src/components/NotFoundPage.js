import React from 'react';

import pageNotFound from '../assets/Page-404.svg';

import './style.css';

const NotFoundPage = () => {
    return (
        <div>
            <img src={pageNotFound} alt="404" className="error-image"/>
        </div>
    );
};

export default NotFoundPage;