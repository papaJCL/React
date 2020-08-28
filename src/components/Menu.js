import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

 const StyledMenu = styled.nav`
  position: fixed;
  z-index: 11;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryDark};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    //overflow: hidden;
  }

  

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)} >
      <a href="/" >
        <span aria-hidden="true"></span>
        <Link
          activeClass="active"
          to="home"
          spy={false}
          smooth={true}
          duration={500}
          onClick={() => setOpen(!open)}
        >💁🏻‍♂️Home </Link>
      </a>
      <a href="/" >
        <span aria-hidden="true"></span>
        <Link
          activeClass="active"
          to="about"
          spy={false}
          smooth={true}
          duration={500}
          onClick={() => setOpen(!open)}
        >💁🏻‍♂️About </Link>
      </a>
      <a href="/" >
        <span aria-hidden="true"></span>
        <Link
          activeClass="active"
          to="projects"
          spy={false}
          smooth={true}
          duration={500}
          onClick={() => setOpen(!open)}
        > Projects </Link>
      </a>
      <a href="/" >
        <span aria-hidden="true"></span>
        <Link
          activeClass="active"
          to="skills"
          spy={false}
          smooth={true}
          duration={500}
          onClick={() => setOpen(!open)}
        > Skills </Link>
      </a>
      <a href="/" >
        <span aria-hidden="true"></span>
        <Link
          activeClass="active"
          to="contact"
          spy={false}
          smooth={true}
          duration={500}
          onClick={() => setOpen(!open)}
        > Contact </Link>
      </a>
    </StyledMenu>
  )
}
export default Menu;