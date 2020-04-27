import React, { Component } from 'react';
import { Jumbotron } from './components/Jumbotron';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import "../node_modules/video-react/dist/video-react.css"; 


const Styles = styled.div`

/* unvisited link */
    a:link {
        color: #bbb;
    }

/* visited link */
    a:visited {
        color: #bbb;
    }

/* mouse over link */
    a:hover {
        color: white;
    }

    /* selected link */
    a:active {
        color: #bbb;
    }

    a:link {
        text-decoration: none;
    }
      
    a:visited {
        text-decoration: none;
    }
      
    a:hover {
        text-decoration: none;
    }
      
    a:active {
        text-decoration: none;
    }
`

class Trip extends Component {

    render() {
        return (
            <div>
                <Styles>
                    <Jumbotron message="PLAN YOUR TRIP" pic="tripPic" />
                    <Container>
                        <h4 className="w3">HOW TO USE THE SITE</h4>
                        <div className="hr" />
                        <div className="display-linebreak">
                            <p className="w3-text-grey">
                                {"The site has many different capabilities and functions.\n The basic premise being " +
                                    "that you can get/search for locations and add them to the itinerary. \n" +
                                    "Once your itinerary is filled to your liking, you can then choose sorting algorithms to make your trip the shortest\n" +
                                    "Additionally, you can just upload the trip from a JSON file(examples below).\n" + 
                                    "There are other small functions that this website can do such as adding custom locations, calculate distance\n" + 
                                     "between locations, calculate total distance, save itinerary as either a JSON,CSV, KML file, filtering for itinerary and more!\n"}
                            </p>
                            <a href="https://github.com/papaJCL/React/blob/master/JSON%20examples/coloradobrews.json"
                            target="_blank"
                            title="JSON Example 1">JSON 1
                            </a>
                            <br/>
                        <a href="https://github.com/papaJCL/React/blob/master/JSON%20examples/worldbrews.json"
                            target="_blank" title="JSON example 2">JSON 2
                            </a>
                        </div>
                        <br/>
                        <br/>
                        <h1 className="w3-center">
                            <a href="http://ec2-3-21-242-13.us-east-2.compute.amazonaws.com:8888/"
                            target="_blank"
                                title="Go to Plan Your Trip Website">CLICK HERE
                            </a>
                        </h1>
                        
                    </Container>
                </Styles>
            </div>
        )
    }
}

export default Trip;