import React, { Component } from 'react';
import { Jumbotron } from './components/Jumbotron';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import aboutPic from './Images/about.jpg'



class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <br /><br /><br />
                <Container>
                    <h3 className="w3-center">ABOUT ME</h3>
                    <p className="w3-center"><em>I love photography</em></p>
                    <p><i class="fa fa-user w3-margin-right"></i>Jeremy</p>
                    <Row>
                        <Col sm>
                            <Card className="card text-center" style={{ backgroundColor: "#595959"}}>
                            <Card.Img src={aboutPic} className="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" height="333px" />
                            </Card>
                        </Col>
                        <Col sm >
                            <Card className="card text-center" style={{ backgroundColor: "#595959"}}>
                                <Card.Body>
                                    <p>
                                        I am a third-year Computer Science student and AROTC cadet at Colorado State University. My work experience before college involved network administration at our family's business. While this wasn't an arduous job, it is what got me interested in working on computers. When it came time to decided on a university, I decided to become a student at CSU due to its amazing Computer Science and ROTC programs, and have since gained many incredibly useful experiences and skills.
                                </p>
                                </Card.Body>
                            </Card>
                            <br/>
                            <Card className="card text-center" style={{ backgroundColor: "#404040"}}>
                                <Card.Title>Technologies</Card.Title>
                                <Card.Body>
                                    <p>
                                        I am a third-year Computer Science student and AROTC cadet at Colorado State University. My work experience before college involved network administration at our family's business. While this wasn't an arduous job, it is what got me interested in working on computers. When it came time to decided on a university, I decided to become a student at CSU due to its amazing Computer Science and ROTC programs, and have since gained many incredibly useful experiences and skills.
                                </p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

export default Home;