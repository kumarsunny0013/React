import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './Routes/private-route';
import LoginPage from './Login/login';
import { HomePage } from './Home/home';
import About from './Home/about';
import Routes from './Routes/routes';

class App extends Component {
  render() {
    return (
      <div>
        <div className="">
          <div className="">
            {/* <Router>
              <div>
                <PrivateRoute exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/about" component={About} />
              </div>
            </Router> */}
            <Routes {...this.parentProps} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
