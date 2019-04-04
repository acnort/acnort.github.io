import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages'
import { Template } from './components'
import './styles/main.sass';

const Routes = () => (
    <Router>
        <Template>
            <Switch>
                <Route path="/" exact={true} component={Home}/>
            </Switch>
        </Template>
    </Router>
);

export default Routes;