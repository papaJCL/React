import React, { Component } from 'react';
import { Form, Row, Col, Card, Button, FormControl, Container } from 'react-bootstrap';


class Trip extends Component {

    openInNewTab() {
        var win = window.open("http://ec2-3-21-242-13.us-east-2.compute.amazonaws.com:8888/", '_blank');
        return (win)
    }

    render() {
        return (
            <div>
                <Card  >
                    <Card.Title>Plan Your Trip Website</Card.Title>
                    <Card.Img thumbnail  variant="top" height="500px" src="https://i.gyazo.com/2e0d0c040598f7ff0ebd6605a976014b.gif" />
                    <Card.Body>

                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="outline-secondary" onClick={this.openInNewTab}>Go to site</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Trip;