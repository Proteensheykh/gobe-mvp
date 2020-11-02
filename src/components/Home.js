import React from 'react';
import SignUp from './SignUp';
import {Container, Row, Col, Image} from 'react-bootstrap';

import illustration from '../assets/illustration_1.svg';

import './style.css';

const Home = () => {
    
    return (
        <main>
            <Container className="main-container__relative">

            </Container>
           <Container className="main-container">
           <Row>
                <Col xs={12} md={6} sm={12}>
                    <div>
                        <h2 className="value-proposition">Get access to valuable resources and information to grow a career in education and collaborate with passionate educators just like you.</h2>
                        <p className="lead">
                            <SignUp />
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={6} sm={6}>
                <Image src={illustration} alt="illustration" className="illustration"/>
                </Col>
            </Row>

            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
                </div>
            </footer>
           </Container>
        </main>
    );
};

export default Home;