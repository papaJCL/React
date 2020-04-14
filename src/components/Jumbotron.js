import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import homePic from '../Images/test5.jpg';
import gpaPic from '../Images/test.jpg';
import tripPic from '../Images/test1.jpg';
import workingOnPic from '../Images/test3.jpg';




const Styles = styled.div`
  .homePic {
    background: url(${homePic}) no-repeat bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
  .gpaPic {
    background: url(${gpaPic}) no-repeat bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }.tripPic {
    background: url(${tripPic}) no-repeat bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }.workingOnPic {
    background: url(${workingOnPic}) no-repeat bottom;
    background-size: cover;
    color: #efefef;
    height: 200px;
    position: relative;
    z-index: -2;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
`;

export const Jumbotron = ({ message, pic }) => (

  <Styles>
    <br />
    <br />
    <Jumbo fluid className={pic}>
      <div className="overlay"/>
      <Container className = "container-fluid">
      <h1 className="w3-xxlarge w3-wide w3-center ">{message}</h1>
      </Container>
    </Jumbo>
  </Styles>

)