import React, { Component } from 'react';
import { Input } from 'reactstrap'
import { Row, Col, Container } from 'react-bootstrap';
import Swal from 'sweetalert2'
import '../node_modules/@sweetalert2/theme-dark';
import { Jumbotron } from './components/Jumbotron';
import styled from 'styled-components';


const Button = styled.button`
    background: transparent;
    border-radius: 6px;
    border: 2px solid #bbb;
    color: #bbb;
    margin: 0.5em 1em;
    padding: 0.25em 1em;
    transition-duration: 0.4s;
    -webkit-transition-duration: 0.4s; 
    transition-duration: 0.4s;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24),0 17px 50px 0 rgba(0,0,0,0.19);
    &:hover {
        color: white;
      }
`;

const Styles = styled.div`
    .form-control:focus {
        border-color: grey;
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.075) inset, 0px 0px 0px grey;
    }
    input[type=text] {
        background-color: #222;
        color: #bbb;
        border: 1px solid #fff;
        border-radius: 4px;
        
    }
`;







class GPA extends Component {
    constructor(props) {
        super(props);

        this.calculateGPA = this.calculateGPA.bind(this)
        this.handleGradeChange = this.handleGradeChange.bind(this)
        this.handleCreditChange = this.handleCreditChange.bind(this)
        this.resetGradesCredits = this.resetGradesCredits.bind(this);


        this.state = {
            grade1: '', credit1: '',
            grade2: '', credit2: '',
            grade3: '', credit3: '',
            grade4: '', credit4: '',
            grade5: '', credit5: '',
            grade6: '', credit6: '',
        }
    }



    showErrorBox() {
        console.log("landed on error boxx")
        return (
            Swal.fire({
                title: 'Error!',
                text: "One or more of the inputs is formatted incorrectly, make sure the grade is letter A through F and credits is a number",
                icon: 'error',
                cancelButtonText: 'Retry',
                showCancelButton: true,
                showConfirmButton: false,
            })
        );
    }

    returnAnswerString(answer) {
        answer = answer.toFixed(2)
        if (answer >= 3.0) {
            return [("Impressive! \nYour GPA is"), ("Congrats you're doing great!"), ('success')]
        }
        else if (answer > 2.5 && answer < 3.0) {
            return [("Not bad! \nYour GPA is"), ("Keep studying and bump it up!"), ('warning')]
        }
        else if (answer <= 2.5) {
            return [("Keep working hard!\n Your GPA is"), ("Your GPA is quite low but keep trying!"), ('error')]
        }
    }

    showAnswerBox(answer) {
        let message = this.returnAnswerString(answer);
        return (
            Swal.fire({
                title: message[0],
                footer: message[1],
                text: answer.toFixed(2),
                showCloseButton: true,
                icon: message[2],
                cancelButtonText: 'Back',
                showCancelButton: true,
                showConfirmButton: false,
            })
        );
    }

    resetGradesCredits() {
        this.setState({
            grade1: '', credit1: '',
            grade2: '', credit2: '',
            grade3: '', credit3: '',
            grade4: '', credit4: '',
            grade5: '', credit5: '',
            grade6: '', credit6: '',
        }, () => {
            console.log("landed after state");
            console.log(this.state);
        });
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

        console.log("final answer reeeee", finalAnswer)

        if (!isNaN(finalAnswer)) {
            this.showAnswerBox(finalAnswer);
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
            <Row >
                <Col  >
                    <Styles>
                        <Input bsSize="sm" name={grade} placeholder={"Letter Grade(A-F)"} onChange={(e) => this.handleGradeChange(grade, e)} />
                    </Styles>
                </Col >
                <Col  >
                    <Styles>
                        <Input bsSize="sm" name={credit} placeholder={"Credits"} onChange={(e) => this.handleCreditChange(credit, e)} />
                    </Styles>
                </Col>
            </Row>
        )
    }

    explainCard() {
        return (
            <div className="display-linebreak">
                <p>
                    {"For the letter grade column, put in your letter grade(A through F)\n" +
                        "For the credits column put how many credits its worth\n" +
                        "Leave the rest of the rows blank once you've put all your classes in\n" +
                        "Press Calculate when done"}
                </p>
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
                    <Button size="sm" onClick={this.resetGradesCredits} >Reset</Button>
            </div>
        );
    }

    render() {
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

}

export default GPA;