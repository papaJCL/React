import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    text-align: center;
    background-color: #262626;
    margin-bottom: 0;
    border: 0;
    font-size: 16px !important;
    letter-spacing: 2px;
    opacity: 1.0;
    padding: 6px;
    margin: 0;
    display: flex;
    justify-content: space-between;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  .navbar-default .navbar-toggle {
    border-color: transparent;
  }
  

.dropdown-toggle[aria-expanded="true"] {
  color: white !important;
}

.navbar .dropdown-menu {
  background-color: #222;
}

.header-sticky {
  background: rgba(252, 252, 252, 1) !important;
  }


.dropdown-menu a {
  color: #bbb !important;
}

.dropdown-menu{
  right: 0; left: auto;
}

.dropdown-menu a:hover {
  background-color: black !important;
}

.dropdown-toggle:after { content: none }


`;




export const NavigationBar = () => (


  <Styles>
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/index.html"><i className="fa fa-home"></i> JEREMY</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="ml-auto" >
          <Nav.Item>
            <Nav.Link eventKey="1">
              <Link to="/Home"><i className="fa fa-user"></i> ABOUT</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="5">
              <Link to="/Info"><i class="fa fa-info" ></i> PROJECT INFO         </Link>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title={
            <span><i className="fa fa-th"></i> PROJECTS</span>} id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Nav.Link eventKey="2">
                <Link to="/GPA">GPA-CALCULATOR</Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link eventKey="3">
                <Link to="/Trip">PLAN-YOUR-TRIP</Link>
              </Nav.Link>
            </NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item>
              <Nav.Link eventKey="4">
                <Link to="/ToDo">COVID-TRACKER</Link>
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)