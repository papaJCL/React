import React, {Component, useState} from 'react';
import GPA from './GPA.js'
import Home from './Home.js'
import Ree from './Ree.js'
import { Navbar,  NavItem, Nav, Container} from 'react-bootstrap';
import {BrowserRouter as Router,Link,NavLink,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';



class Navigator extends Component{

    render(){
        return(
            <center>
                <div>
                    {this.renderNavigationBar()}
                </div>
            </center>
        )
    }

    renderGPA(){
        return(
            <GPA />
        )
    }

    renderHome(){
        return(
            <Home />
        )
    }

    renderRee(){
        return(
            <Ree />
        )
    }


    renderNavigationBar(){
        return (
                <Router>
                <Navbar expand="sm" className="justify-content-center" variant="dark" >
                    <Nav fill>
                    <Nav.Item><Nav.Link as={NavLink} to="/" exact>Home</Nav.Link> </Nav.Item>
                    <Nav.Item><Nav.Link as={NavLink} to="/GPA" exact>GPA-Calculator</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link as={NavLink} to="/Ree" exact>Ree</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar>
                <Route path="/GPA" exact component={this.renderGPA} />
                <Route path="/" exact component={this.renderHome} />
                <Route path="/Ree" exact component={this.renderRee} />
                </Router>
        );
      }
    }

export default Navigator;