import React, { Component } from 'react';
import { Input } from 'reactstrap'
import { Row, Col, Card, Button, Container } from 'react-bootstrap';
import Swal from 'sweetalert2'
import { Jumbotron } from './components/Jumbotron';



class GPA extends Component {
    constructor(props) {
        super(props);

        this.calculateGPA = this.calculateGPA.bind(this)
        this.handleGradeChange = this.handleGradeChange.bind(this)
        this.handleCreditChange = this.handleCreditChange.bind(this)

        this.state = {
            grade1: '', credit1: '',
            grade2: '', credit2: '',
            grade3: '', credit3: '',
            grade4: '', credit4: '',
            grade5: '', credit5: '',
            grade6: '', credit6: '',
            finalAnswer: null,
        }
    }

    showErrorBox() {
        return (
            Swal.fire({
                title: 'Error!',
                text: "One or more of the inputs is formatted incorrectly, make sure the grade is letter A through F and credits is an integer",
                icon: 'error',
                confirmButtonText: 'Retry'
            })
        );
    }

    checkIfValidGrade(gradeArray) {
        let newGrades = []
        for (var i = 0; i < gradeArray.length; i++) {
            var s = gradeArray[i];
            if (s.match(/[a-f]/i) && s.length == 1) {
                newGrades.push(s);
            }
            else if (s.length != 0) {
                this.showErrorBox();
            }
        }
        return newGrades;
    }

    checkIfValidCredits(creditArray) {
        let newCredits = []
        for (var i = 0; i < creditArray.length; i++) {
            var integer = parseInt(creditArray[i], 10);
            if (Number.isInteger(integer) == true && creditArray[i].length != 0) {
                newCredits.push(integer);
            }
            else if (creditArray[i].length != 0) {
                this.showErrorBox();
            }
        }
        return newCredits;
    }

    convertGradeToNum(grade, credit) {
        grade = grade.toLowerCase();
        switch (grade) {
            case ('a'):
                return ((credit * 4));
            case ('b'):
                return ((credit * 3));
            case ('c'):
                return ((credit * 2));
            case ('d'):
                return ((credit * 1));
            case ('f'):
                return ((credit * 0));
        }
    }

    getCalculation(gradeArray, credits) {
        let sumArray = []
        for (var i = 0; i < gradeArray.length; i++) {
            sumArray.push((this.convertGradeToNum(gradeArray[i], credits[i])))
        }
        return ((sumArray.reduce((a, b) => a + b, 0)) / credits.reduce((a, b) => a + b, 0));
    }


    calculateGPA() {
        let grades = [];
        let credits = [];
        let finalAnswer = null;
        const a = this.state;
        Object.entries(a).map(([key, value]) => {
            if (key.includes("grade")) {
                grades.push(value)
            }
            if (key.includes("credit")) {
                credits.push(value)
            }
        })
        grades = this.checkIfValidGrade(grades);
        credits = this.checkIfValidCredits(credits);
        finalAnswer = this.getCalculation(grades, credits);

        if (!isNaN(finalAnswer)) {
            this.props.setFinalAnswerState(finalAnswer);
        }

    }

    handleGradeChange(grade, e) {
        this.setState({
            [grade]: e.target.value,
        });
    }

    handleCreditChange(credit, e) {
        this.setState({
            [credit]: e.target.value,
        });
    }

    renderFormRow(grade, credit) {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="5" >
                        <Input bsSize="sm" name={grade} placeholder={"Letter Grade(A-F)"} onChange={(e) => this.handleGradeChange(grade, e)} />
                    </Col >
                    <Col xs lg="5" >
                        <Input bsSize="sm" name={credit} placeholder={"Credits"} onChange={(e) => this.handleCreditChange(credit, e)} />
                    </Col>
                </Row>
            </Container>
        )
    }

    explainCard() {
        return (
            <div className="display-linebreak">
                <Card className="card border-0">
                    <Card.Text>
                        <p>{"For the letter grade column, put in your letter grade(A through F)\n" +
                            "For the credits column put how many credits its worth\n" +
                            "Leave the rest of the rows blank once you've put all your classes in\n" +
                            "Press Calculate when done"}</p>
                    </Card.Text>
                </Card>
            </div>
        );
    }

    renderInputs() {
        return (
            <div >
                {this.renderFormRow("grade1", "credit1")}
                {this.renderFormRow("grade2", "credit2")}
                {this.renderFormRow("grade3", "credit3")}
                {this.renderFormRow("grade4", "credit4")}
                {this.renderFormRow("grade5", "credit5")}
                {this.renderFormRow("grade6", "credit6")}
                <br />
                <Button size="sm" onClick={this.calculateGPA} >Calculate</Button>
            </div>
        );
    }

    render() {
        if (this.props.finalGpaAnswer == null) {
            return (
                <div >
                    <Jumbotron message="GPA Calculator" pic="gpaPic" />
                    <Container>
                        {this.explainCard()}
                        <br />
                        {this.renderInputs()}
                    </Container>
                </div>
            )
        }
        else if (this.props.finalGpaAnswer != null) {
            return (
                <div>
                    <Jumbotron message="GPA Answer" pic="gpaPic" />
                    <Container>
                        <h1>{this.props.finalGpaAnswer}</h1>
                        <Button size="sm" onClick={this.props.resetGPAState} >Reset</Button>
                    </Container>
                </div>
            )
        }
    }

}

export default GPA;