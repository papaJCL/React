import React, { Component, useState } from 'react';
import GPA from './GPA.js'
import Home from './Home.js'
import ToDo from './ToDo.js'
import { Navbar, NavItem, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link, NavLink, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.png';



class Navigator extends Component {

    constructor(props) {
        super(props);


    }

    render() {
        return (
            <center>
                <div>
                    {this.renderNavigationBar()}
                </div>
            </center>
        )
    }

    renderHome() {
        return (
            <Home />
        )
    }

    renderToDo() {
        return (
            <ToDo />
        )
    }

    renderCS314() {
        return (
            <div>CS314 Link here</div>
        )
    }

    renderWorkOn() {
        return (
            <div>Work on here</div>
        )
    }


    renderNavigationBar() {
        return (
            <Router>

                <Navbar expand="sm" className="justify-content-center" bg="light" variant="light"   >
                    <Navbar.Toggle />
                    <Navbar.Collapse >
                        <Nav fill >
                            <img
                                src={logo}
                                width="150"
                                height="45"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            <Nav.Item><Nav.Link as={NavLink} to="/" exact>Home</Nav.Link> </Nav.Item>
                            <Nav.Item><Nav.Link as={NavLink} to="/GPA" exact>GPA-Calculator</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link as={NavLink} to="/toDo" exact>Placeholder</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link as={NavLink} to="/CS314" exact>Plan Your Trip</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link as={NavLink} to="/workOn" exact>Work On</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route
                    path="/GPA"
                    render={() => (<GPA
                        finalGpaAnswer={this.props.finalGpaAnswer}
                        setFinalAnswerState={this.props.setFinalAnswerState}
                        resetGPAState={this.props.resetGPAState}
                    />)} />
                <Route path="/" exact component={this.renderHome} />
                <Route path="/toDo" exact component={this.renderToDo} />
                <Route path="/CS314" exact component={this.renderCS314} />
                <Route path="/workOn" exact component={this.renderWorkOn} />
            </Router>

        );
    }
}

export default Navigator;