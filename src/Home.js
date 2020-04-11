import React, { Component } from 'react';
import { Jumbotron } from './components/Jumbotron';
import { Container } from 'react-bootstrap';



class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron message="WELCOME" pic="homePic" />
                <Container>
                <div className="display-linebreak">
                <h4>Testing home</h4>
                <p>
                    {"1. For the letter grade column, put in your letter grade(A through F)\n" +
                        "2. For the credits column put how many credits its worth\n" +
                        "3. Leave the rest of the rows blank once you've put all your classes in\n" +
                        "4. Press Calculate when done"}
                </p>
            </div>
                </Container>
            </div>
            
        )
    }
}

export default Home;