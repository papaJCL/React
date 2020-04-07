import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;



export const NavigationBar = () => (
  <Styles>
  <Navbar expand="lg" bg="text-secondary">
    <Navbar.Brand href="/index.html">Muh Brand</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse >
      <Nav  bg="text-secondary" className="ml-auto">
      <Nav.Item>
          <Nav.Link>
            <Link to="/Home">Home</Link>
          </Nav.Link>
        </Nav.Item><Nav.Item>
          <Nav.Link>
            <Link to="/GPA">GPA-Calculator</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/Trip">Plan Your Trip</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/ToDo">Working On</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </Styles>
)