import React, { Component } from 'react';
import Typical from 'react-typical'
import styled from 'styled-components';
import Home from './Home';
import App from './App';
import ReactDOM from 'react-dom';






const Button = styled.button`
    background: transparent;
    border-radius: 6px;
    border: 2px solid #bbb;
    color: #bbb;
    width: 400vh
    margin: 0.1em 1em;
    padding: .8em 1em;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    &:hover {
        color: white;
    },
    .btn:focus, .btn:active {
        outline: none !important;
        box-shadow: none !important;
      }
`;

class Intro extends Component {

    render() {
        return (
            <div className="introBG" >
                <div className="overlay" />
                <div className="w3-display-middle bg-text">
                    <h1 className="w3-jumbo  w3-center  w3-text-white w3-wide">{this.textFunction()}</h1>
                    <div className="big-hr" />
                    <br/>
                    <p className="w3-large w3-center">{this.goToButton()}</p>
                </div>
            </div>

        )
    }

    goToButton(){
        return(
            <Button onClick={this.loadWebsite}>
                PROCEED TO SITE 
            </Button>
        )
    }

    loadWebsite(){
        ReactDOM.render(<App firstLoad="true"/> , document.getElementById('root'));
    }

    textFunction() {
        return (
            <Typical
                steps={['WELCOME', 1000, "TO" , 500 , "JEREMY'S WEBSITE", 500]}
            />
        )
    }
}

export default Intro;

