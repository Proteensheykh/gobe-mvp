import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout';
import Home from './components/Home';
import Welcome from './components/Welcome';
import { Container } from 'react-bootstrap';

const App = () => (
    <Container>
        <Router>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/welcome' component={Welcome} />
            </Switch>
        </Layout>
    </Router>
    </Container>
);

export default App;