import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout';
import Home from './components/Home';
import NotFoundPage from './components/NotFoundPage';
import { HOMEPAGE, WELCOME } from './routes/urlRoutes';
import Welcome from './components/Welcome';
import { Container } from 'react-bootstrap';

const App = () => (
    <Container>
        <Router>
        <Layout>
            <Switch>
                <Route exact path={HOMEPAGE} component={Home} />
                <Route exact path={WELCOME} component={Welcome} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </Layout>
    </Router>
    </Container>
);

export default App;