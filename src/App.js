import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Layout from './hoc/Layout';
import Home from './components/Home';
<<<<<<< HEAD
import NotFoundPage from './components/NotFoundPage';
import { HOMEPAGE, WELCOME } from './routes/urlRoutes';
=======
import { HOMEPAGE, WELCOME, PAGENOTFOUND } from './routes/urlRoutes';
>>>>>>> 6a91f4e2c096f6e1fbe8d2615ce815bfa6def892
import Welcome from './components/Welcome';
import NotFoundPage from './components/NotFoundPage';
import { Container } from 'react-bootstrap';

const App = () => (
    <Container>
        <Router>
        <Layout>
            <Switch>
                <Route exact path={HOMEPAGE} component={Home} />
                <Route exact path={WELCOME} component={Welcome} />
<<<<<<< HEAD
                <Route path="*" component={NotFoundPage} />
=======
                <Route path={PAGENOTFOUND} component={NotFoundPage} />
                <Redirect to={PAGENOTFOUND} />
>>>>>>> 6a91f4e2c096f6e1fbe8d2615ce815bfa6def892
            </Switch>
        </Layout>
    </Router>
    </Container>
);

export default App;