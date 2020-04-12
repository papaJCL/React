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
  .overlay {
    background-color: black;
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    
  }
`;

export const Jumbotron = ({ message, pic }) => (

  <Styles>
    <Jumbo fluid className={pic}>
      <div className="overlay"></div>
      <Container>
      <h2 className="w3-wide ">{message}</h2>
      </Container>
    </Jumbo>
  </Styles>

)