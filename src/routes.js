import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages'
import { Template, Header, Footer } from './components'
import './styles/main.sass';

const Routes = () => (
    <Router>
        <div className="wrapper">
            <Header />
            <Template>
                <Switch>
                    <Route path="/" exact={true} component={Home}/>
                </Switch>
            </Template>
            <Footer />
        </div>
    </Router>
);

export default Routes;