import React, { Component } from 'react';
import { Container, Row, Col, Card, CardDeck, CardGroup } from 'react-bootstrap';


const PlanYourTripTechs = (" MySQL, TypeScript, React, Java Spark, MariaDB,  POM, Junit, Maven, Bootstrap, Leaflets, Git, PuTTY")
const GPACalcTechs = (" CSS, HTML,  webpack, Styled Components, Babel, AWS, CI/CD")
const COVIDTechs = (" Hooks, api requests, Material UI, Charts js")

const PlanYourTripBody = (
    "This project is the result from a group project from my introduction to software development class , and is what inspired me to become a software developer." + 
    "This web app was my first time dipping into the software development world , learning for the first time how back end and front end worked together." + 
    "Additionally this class was setup to imitate a real world agile environment." + 
    "This is where I first learned my first front end language and framework: React. I also learned the methodologies of full stack development " + 
    "There was one really big downside to this project however, and that was no custom CSS was allowed, only the CSS provided was to be used. This limited " + 
    "what I wanted the front end to look like and is one of the main reasons I created this site to teach myself CSS and how powerful it can be when hooked " + 
    "with a powerful framework such as React.\n\n"  + 
    "After the product was done, I wanted to learn how to host it on my own servers. This is when I learned about the EC2 VM that amazon runs so I had to learn " + 
    "how to configure it to run both my jar file, and the MariaDB that CSU was hosting."
    
)
const GPABody = (
    "The GPA calucator was the first application built into this website. This is where I learned about hosting with AWS for the first time and setting up a CI/CD that is linked with." + 
    "my github. The first version of my GPA calculator was actually created with an extremely limited java franework JFrame and was my main side project to help me land my first internship " + 
    "Additionally, this is where I learned how to change/stylize react componenets using CSS. "
)
const COVIDBody = (
    "Knowing how important api requests is to software development/full stack development it was time I learned how to integrate them into my site. " + 
    "The COVID data seemed perfect for this considering it's constantly changing and I can also learn how to graph the data in react. After getting very familiar " + 
    "and used to react-bootstrap I realized it was time to learn a more complex react framework, Material-UI." + 
    "I find this application really useful because the other COVID sites were slow and clunky because it wanted to present all the data, where here I can just search for " + 
    "the country and see the total."
)





class Info extends Component {

    renderCards(titleColor, backGroundColor, title, text, technologiesUsed) {
        return (
            <Card className="card border-0" style={{ backgroundColor: backGroundColor }}>
                <Card.Title className="card text-center" style={{ padding: '17px', backgroundColor: titleColor, color: "#bbb", height: '60px' }}> {title} </Card.Title>
                <Card.Body >
                    <div className="display-linebreak">
                        <p>
                            {text}
                        </p>
                    </div>
                </Card.Body>
                <Card.Footer className="card text-center" style={{ color: "#bbb" }} >
                    <small>New Concepts Learned: {technologiesUsed}</small>
                </Card.Footer>
            </Card>
        )
    }

    render() {
        return (
            <div >
                <br /><br /><br />
                <Container>
                    {this.renderCards("#404040", "#595959", "PLAN YOUR TRIP", PlanYourTripBody, PlanYourTripTechs)}
                    <br />
                    {this.renderCards("#404040", "#595959", "GPA CALCULATOR", GPABody, GPACalcTechs)}
                    <br />
                    {this.renderCards("#404040", "#595959", "COVID TRACKER", COVIDBody, COVIDTechs)}
                </Container>
            </div>

        )
    }
}

export default Info;
