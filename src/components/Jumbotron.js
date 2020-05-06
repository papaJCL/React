import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import homePic from '../Images/test5.jpg';
import gpaPic from '../Images/test.jpg';
import tripPic from '../Images/test1.jpg';
import workingOnPic from '../Images/test3.jpg';




const Styles = styled.div`
  .homePic {
    background-color: #3a3a3a;
    color: white;
  }
  .gpaPic {
    background-color:#3a3a3a;
    background-size: cover;
    color: #efefef;
    height: auto;
    position: relative;
    z-index: -2;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }.tripPic {
    background-color:#3a3a3a;
    background-size: cover;
    color: #efefef;
    height: auto;
    position: relative;
    z-index: -2;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }.workingOnPic {
    background-color:#3a3a3a;
    background-size: cover;
    color: #efefef;
    height: auto;
    position: relative;
    z-index: -2;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }
`;

export const Jumbotron = ({ message, pic }) => (

  <Styles>
    <br/>
    <Jumbo  className={pic}>
      <h1 className="w3-xxlarge w3-wide w3-center w3-text-white ">{message}</h1>
    </Jumbo>
  </Styles>

)