import React from 'react';
import styled from 'styled-components';
import './snow.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import bg from './Images/bg.jpg'




export const HomeStyles = styled.div`
    align-items: center;
    background:  url(${bg}) no-repeat center center ;
    //background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    //flex-wrap: wrap;
    height: 100vh;
    overflow-x: hidden;
  `

  export const AStyle = styled.button`
  cursor: pointer;
  text-decoration:none;
  font-size: 2.2rem;
  background: rgb(0,139,139 , 0.6);
  color: ${({ theme }) => theme.primaryLight};
  //border: 2px solid white;
  border: none;
  position: absolute;
  bottom:8%;
  //font-weight: bold;
  //letter-spacing: 0.2rem;

  font-family:'raleway';
  
  box-shadow: 0 5px 10px rgba(154,160,185,.6), 0 15px 40px rgba(166,173,201,.2);
  &:hover {
    // color: ${({ theme }) => theme.primaryHover};
    background: rgb(0,139,139 );
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
  }
`


const Hero = styled.div`
  z-index: 10;
  width: 100%;
  height: calc(100vh - 50px);
  display:flex;
  justify-content:center;
  align-items:center;
`;


const TextWrapper = styled.div`
display:block;
width:100%;
text-align:center;
`

const Header = styled.h1`
font-family:'raleway';
font-size:3.5rem;
font-weight:400;
@media (max-width: 675px) {
font-size:2rem;
  }
  @media (max-width: 500px) {
font-size:1.5rem;
  }
`

const SubHeader = styled.h1`
font-family:'raleway';
font-size:2.2rem;
font-weight:400;
margin-top:0.3em;
@media (max-width: 675px) {
font-size:1.65rem;
  }
  @media (max-width: 500px) {
font-size:1.2rem;
  }
`

const ColorText = styled.span`
color: ${({ theme }) => theme.jeremyFont};
`

const SubColorText = styled.span`
color: ${({ theme }) => theme.jeremyFont};
`



const returnSnow = () => {
  return (
    <div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
      <div className="snow"></div>
    </div>
  )
}

const Home = React.memo (({ id }) => {

  return (
    <div id={id} >
      {returnSnow()}
      <HomeStyles>
        <Hero>
        <AStyle href="/" >
            <Link
              activeClass="active"
              to="about"
              spy={false}
              smooth={true}
              duration={500}
            >
              Learn More  <i className="far fa-hand-point-down"></i>
            </Link>
            </AStyle>
          <TextWrapper>
            <Header>Hello, I'm <ColorText>Jeremy Lesser</ColorText></Header>
            <SubHeader>Aspiring <SubColorText>Software/Fullstack</SubColorText> Engineer </SubHeader>
          </TextWrapper>
        </Hero>
      </HomeStyles>
    </div>
  )
})


export default Home;