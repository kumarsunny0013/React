import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { userService } from '../Services/user.service';
import ReactTable from "react-table";
import "react-table/react-table.css";
import Layout from './layout';
import Footer from './footer';
class HomePage extends Component {

    state = {
        user: {},
        users: []
    };


    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(users => this.setState({ users }));
    }

    render() {
        const { user, users } = this.state;
        return (
            <div className="">
                <Layout data="home" />
                <h3 className="text-center">SCAN LIST</h3>
                <div className="col-md-10 col-md-offset-1">
                    <ReactTable

                        columns={[
                            {
                                Header: "Name",


                            },
                            {
                                Header: "Name",


                            },
                            {
                                Header: "Name",


                            },
                            {
                                Header: "Info",
                            }
                        ]}
                        defaultPageSize={10}
                        className="-striped -highlight"
                    />
                </div>
                <Footer />
            </div>
        );
    }
}

export { HomePage };