import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout';
import Home from './pages/Home';
import { HOMEPAGE, WELCOME } from './routes/urlRoutes';
import Welcome from './pages/Welcome';
import NotFoundPage from './pages/NotFoundPage';
import { Container } from 'react-bootstrap';

import './style.css';

const App = () => (
    <Container>
        <Router>
        <Layout>
            <Switch>
                <Route exact path={HOMEPAGE} component={Home} />
                <Route exact path={WELCOME} component={Welcome} />
                <Route path="/404" component={NotFoundPage} />
                <Redirect to="/404" />
            </Switch>
        </Layout>
    </Router>
    </Container>
);

export default App;