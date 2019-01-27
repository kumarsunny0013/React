import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './private-route';
import { PublicRoute } from './public-route';
import { HomePage } from '../Home/home';
import LoginPage from '../Login/login';
import About from '../Home/about';
class Routes extends Component {
    render() {
        return (
            <Router>
                <switch>
                    <PrivateRoute exact path="/" component={HomePage} />
                    <PublicRoute path="/login" component={LoginPage} />
                    <PrivateRoute path="/about" component={About} />
                </switch>
            </Router>
        )
    }
}

export default Routes;