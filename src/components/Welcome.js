import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

import welcomeIllustration from '../assets/welcome-desktop.svg';
import './style.css';

const welcome = () => (
    <main>
        <Container className="welcome-container">
            <Row>
                <Col xs={12} md={4} sm={12}>
                    <Row>
                        <div>
                            <h2 className="welcome">Welcome to Go-Be</h2>
                        </div>
                        <div>
                            <h2 className="check-mail">Please check your mail.</h2>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <img src={welcomeIllustration} alt="Welcome Illustration" className="welcome-illustration" />
                </Col>
            </Row>
        </Container>
    </main>
);

export default welcome;