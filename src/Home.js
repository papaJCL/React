import React, { Component } from 'react';
import { Container, Row, Col, Card, CardDeck, CardGroup } from 'react-bootstrap';
import aboutPic from './Images/about.jpg'
import reactPic from './Images/react.png'
import cssPic from './Images/css.png'
import javaPic from './Images/java.png'
import cPic from './Images/cplusplus.png'
import typeScriptPic from './Images/typeScript.png'
import gitPic from './Images/git.png'
import mscPic from './Images/studio.png'
import intelijiPic from './Images/intelliji.png'
import jupPic from './Images/jup.png'
import cProgPic from './Images/c.png'
import mySQLPic from './Images/mysql.png'
import pythonPic from './Images/python.png'




const AboutMeBody = (
    "I am a Computer Science Graduate from CSU who is very interested in developing new and complex software. \n" + 
    "My favorite hobbies besides programming include skiing, hiking, playing video games."
)



class Home extends Component {

    constructor(props) {
        super(props);
    }

    renderFirstRow() {
        return (
            <div>
                <h3 className="w3-center">ABOUT ME</h3>
                <p className="w3-center"><em>I am an enthusiastic software developer who enjoys building cool software and solving problems.</em></p>
                <Row>
                    <Col sm >
                        <Card className="card text-center card border-0" style={{ backgroundColor: "#0d0d0d" }}>
                            <div className="bigHover mx-auto">
                                <Card.Img src={aboutPic} className="mx-auto w3-round cardHeight jeremyWidth" alt="Photo of Me" />
                            </div>
                        </Card>
                    </Col>
                    
                </Row>
                <Row>
                <Col sm >
                        <Card className="card border-0 mx-auto" style={{ backgroundColor: "#595959"  , maxWidth: "400px"}}>
                            <Card.Title className="card text-center" style={{ padding: '17px', backgroundColor: "#404040", color: "#bbb", height: '60px' }}> ABOUT </Card.Title>
                            <Card.Body >
                                <div className="display-linebreak">
                                    <p>
                                        {AboutMeBody}
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    </Row>
            </div>
        )
    }

    renderPrimaryLanguages() {
        return (
            <CardGroup>
                <Card className="card text-center card border-0" style={{ backgroundColor: "#404040" }}>
                    <Card.Title className="card text-center px-auto" style={{ padding: '17px', backgroundColor: "#595959", color: "#bbb", height: '60px' }}>PRIMARY LANGUAGES</Card.Title>
                    <CardDeck>
                        <Card className="card border-0" style={{ backgroundColor: "#404040" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={reactPic} />
                            <Card.Body>
                                <Card.Text>
                                    React
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card border-0" style={{ backgroundColor: "#404040" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={cssPic} />
                            <Card.Body>
                                <Card.Text>
                                    CSS
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card border-0" style={{ backgroundColor: "#404040" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={javaPic} />
                            <Card.Body>
                                <Card.Text>
                                    Java
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card border-0" style={{ backgroundColor: "#404040" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={cPic} />
                            <Card.Body>
                                <Card.Text>
                                    C++
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card border-0" style={{ backgroundColor: "#404040" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto rounded-circle" variant="top" src={typeScriptPic} />
                            <Card.Body>
                                <Card.Text>
                                    Typescript
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Card>
            </CardGroup>
        )
    }

    renderTools() {
        return (
            <CardGroup>
                <Card className="card border-0 card text-center" style={{ backgroundColor: "#595959" }}>
                    <Card.Title className="card text-center px-auto" style={{ padding: '17px', backgroundColor: "#404040", color: "#bbb", height: '60px' }}>TOOLS</Card.Title>
                    <CardDeck>
                        <Card className="card border-0" style={{ backgroundColor: "#595959" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={gitPic} />
                            <Card.Body>
                                <Card.Text>
                                    Git
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card border-0" style={{ backgroundColor: "#595959" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={mscPic} />
                            <Card.Body>
                                <Card.Text>
                                    Visual Studio Code
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card border-0" style={{ backgroundColor: "#595959" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={intelijiPic} />
                            <Card.Body>
                                <Card.Text>
                                    IntelliJ
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card border-0" style={{ backgroundColor: "#595959" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={jupPic} />
                            <Card.Body>
                                <Card.Text>
                                    Jupyter Notebooks
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Card>
            </CardGroup>
        )
    }

    renderSecondaryLanguages() {
        return (
            <CardGroup>
                <Card className="card border-0 card text-center" style={{  backgroundColor: "#404040" }}>
                    <Card.Title className="card text-center px-auto" style={{ padding: '17px', backgroundColor: "#595959", color: "#bbb", height: '60px' }}>SECONDARY LANGUAGES</Card.Title>
                    <CardDeck>
                        <Card className="card border-0" style={{ backgroundColor: "#404040" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={cProgPic} />
                            <Card.Body>
                                <Card.Text>
                                    C
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card border-0" style={{ backgroundColor: "#404040" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={mySQLPic} />
                            <Card.Body>
                                <Card.Text>
                                    MySQL
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="card border-0" style={{ backgroundColor: "#404040" }}>
                            <Card.Img className="img-hover-zoom--basic logoHeight mx-auto" variant="top" src={pythonPic} />
                            <Card.Body>
                                <Card.Text>
                                    Python
                                        </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Card>
            </CardGroup>
        )
    }

    render() {
        return (
            <div >
                <br /><br /><br />
                <Container>
                    {this.renderFirstRow()}
                    <br />
                    {this.renderPrimaryLanguages()}
                    <br />
                    {this.renderTools()}
                    <br />
                    {this.renderSecondaryLanguages()}
                </Container>
            </div>

        )
    }
}

export default Home;