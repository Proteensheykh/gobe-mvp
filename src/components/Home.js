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
                <Col xs={12} md={5} sm={12}>
                    <div>
                        <h2 className="value-proposition">Get access to valuable resources and information to grow a career in education and collaborate with passionate educators just like you.</h2>
                        <div className="lead">
                            <SignUp />
                        </div>
                    </div>
                </Col>
                <Col>
                <Image src={illustration} alt="illustration" className="illustration"/>
                </Col>
            </Row>

            <footer className="footer mt-auto py-3">
                <div className="footer-container">
                <a href="http://www.freepik.com"> Illustrations Designed by pch.vector / Freepik</a>
                </div>
            </footer>
           </Container>
        </main>
    );
};

export default Home;