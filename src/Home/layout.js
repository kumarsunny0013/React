import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './about';
class Layout extends Component {

    state = {
        flag: this.props.data
    }

    active = (data) => {
        this.setState({ flag: data })
    }

    render() {
        return (
            <div className="header">
                <a href="/" className="logo"><img src="../infosys.jpg" style={{ width: "150px", height: "50px" }}></img></a>
                <div className="header-right">
                    <h3 className="">Hi! {JSON.parse(localStorage.getItem('user')).firstName}</h3>
                    <Link to="/" className={this.state.flag == "home" ? "active" : ""} >Home</Link>
                    <Link to="/about" className={this.state.flag == "about" ? "active" : ""} ><b>About</b></Link>
                    <Link to="/login"><b>Logout</b></Link>
                    {/* <Redirect to={{ pathname: '/login', state: { from: props.location } }} /> */}
                </div>
            </div>
        )
    }
}

export default Layout;