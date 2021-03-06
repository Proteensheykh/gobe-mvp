import React from 'react';
import SignUp from '../components/SignUp';
import {Container, Row, Col, Image} from 'react-bootstrap';

import illustration from '../assets/illustration_1.svg';

import './Home.css';

const Home = () => {
    
    return (
        <main>
             <Container className="main-container__relative">
               
            </Container>
           <Container className="main-container">
           <Row className="illustrator-tag">
                <Col xs={12} md={5} sm={12}>
                    <div>
                        <h2 className="value-proposition">Get access to valuable resources and information to grow a career in education and collaborate with passionate educators just like you.</h2>
                        <div className="lead">
                            <SignUp />
                        </div>
                    </div>
                </Col>
                <Col>
                <div>
                <Image src={illustration} alt="illustration" className="illustration"/>
                </div>
                </Col>
            </Row>
           </Container>
        </main>
    );
};

export default Home;