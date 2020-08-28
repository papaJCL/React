import React from 'react';
import styled from 'styled-components';
import './snow.scss';
import { Link, animateScroll as scroll } from "react-scroll";
import bg from './images/bg.jpg'



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
    //justify-content: center;
  `

const Button = styled.button`
  position: absolute;
  bottom:8%;
  background: ${({ theme }) => theme.primaryLight};
  border-radius: 3px;
  border: 2px solid white;
  color: ${({ theme }) => theme.primaryDark};
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    color: ${({ theme }) => theme.primaryHover};
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


const Home = ({ id }) => {

  return (
    <div id={id} >
      {returnSnow()}
      <HomeStyles>
        <Hero>
          <Button >
            <Link
              activeClass="active"
              to="about"
              spy={false}
              smooth={true}
              duration={500}
            >Learn More ↓ </Link>
          </Button>
          <TextWrapper>
            <Header>Hello, I'm <ColorText>Jeremy Lesser</ColorText></Header>
            <SubHeader>Aspiring <SubColorText>Software/Fullstack</SubColorText> Engineer </SubHeader>
          </TextWrapper>
        </Hero>
      </HomeStyles>
    </div>
  )
}


 {/* <Button onClick={() => console.log("landed here")}> */}

export default Home;