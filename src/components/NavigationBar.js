import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
    margin-bottom: 0;
    border: 0;
    font-size: 15px !important;
    letter-spacing: 4px;
    opacity: 1.0;
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
`;



export const NavigationBar = () => (

  
  <Styles>
    <Navbar fixed="top" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/index.html">JEREMY</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link eventKey="1">
              <Link to="/Home">Home</Link>
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Nav.Link eventKey="2">
                <Link to="/GPA">GPA-Calculator</Link>
              </Nav.Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Nav.Link eventKey="3">
                <Link to="/Trip">Plan-Your-Trip</Link>
              </Nav.Link>
            </NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item>
              <Nav.Link eventKey="4">
                <Link to="/ToDo">Covid-Tracker</Link>
              </Nav.Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)