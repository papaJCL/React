import React, {Component} from 'react';
import {Input } from 'reactstrap'

import { Form, Row, Col, Card, Button , FormControl} from 'react-bootstrap';
import Swal from 'sweetalert2'


import 'bootstrap/dist/css/bootstrap.min.css';



class GPA extends Component{

    constructor(props){
        super(props);

        this.calculateGPA = this.calculateGPA.bind(this)
        this.handleGradeChange = this.handleGradeChange.bind(this)
        this.handleCreditChange = this.handleCreditChange.bind(this)
        
        this.state = {
            grade1: '',          credit1: '',
            grade2: '',          credit2: '',
            grade3: '',          credit3: '',
            grade4: '',          credit4: '',
            grade5: '',          credit5: '',
            grade6: '',          credit6: '',
            finalGPACalculate : 
            {grades: [], credits: []},
            alert: null
        }
    }

    showErrorBox(){
        return(
            Swal.fire({
                title: 'Error!',
                text: "One or more of the inputs is formatted incorrectly, make sure the grade is letter A through F and credits is an integer",
                icon: 'error',
                confirmButtonText: 'Retry'
              })
        );
    }

    checkIfValidGrade(gradeArray){
        let newGrades = []
        for (var i = 0; i < gradeArray.length; i++){
            var s = gradeArray[i];
            if (s.match(/[a-f]/i) && s.length == 1) {
                newGrades.push(s);
            }
            else if (s.length != 0){
                this.showErrorBox();
            }
        }
        return newGrades;
    }

    checkIfValidCredits(creditArray){
        let newCredits = []
        for (var i = 0; i < creditArray.length; i++){
            var integer = parseInt(creditArray[i], 10);
            if (creditArray[i].length === 0  || Number.isInteger(integer) == true){
                newCredits.push(integer);
            }
            else{
                this.showErrorBox();
            }
        }
        return newCredits;
    }

    calculateGPA(){
        let grades = [];
        let credits = [];
        const a = this.state;
        Object.entries(a).map(([key, value]) => {
            if (key.includes("grade")){
                grades.push(value)
            }
            if (key.includes("credit")){
                credits.push(value)
            }
        })
        grades = this.checkIfValidGrade(grades);
        credits = this.checkIfValidCredits(credits);
        console.log("new grades " + grades);
        console.log("new credits " + credits);
        
    }

    handleGradeChange(grade, e){
        this.setState({
            [grade] : e.target.value , 
        });
    }

    handleCreditChange(credit, e){
        this.setState({
            [credit] : e.target.value , 
        });
    }

    renderFormRow(grade, credit){
        return(
                <Form.Row>
                    <Col >
                    <Input bsSize="sm" name={grade} placeholder={"Letter Grade(A-F)"}  onChange={(e) => this.handleGradeChange(grade, e)}/>                                                                
                    </Col>
                    <Col>
                    <Input bsSize="sm" name={credit} placeholder={"Credits"} onChange={(e) => this.handleCreditChange(credit, e)} />
                    </Col>      
            </Form.Row>
           
        )
    }

    explainCard(){
        return(
            <div className = "display-linebreak">
                <Card className="bg-transparent text-white">
                    <Card.Text>
                            {"For the letter grade column, put in your letter grade(A through F)\n"+
                            "For the credits column put how many credits its worth\n"+
                            "Leave the rest of the rows blank once you've put all your classes in\n"+
                            "Press Calculate when done"}
                    </Card.Text>
                </Card>
            </div>
        );
    }

    renderInputs(){
        return(
            <div >
            {this.renderFormRow("grade1", "credit1")}
            {this.renderFormRow("grade2", "credit2")}
            {this.renderFormRow("grade3", "credit3")}
            {this.renderFormRow("grade4", "credit4")}
            {this.renderFormRow("grade5", "credit5")}
            {this.renderFormRow("grade6", "credit6")}
            <Button size="sm" onClick={this.calculateGPA} >Calculate</Button>
        </div>
        );
    }

    render(){
        return(
        <div>
            {this.explainCard()}
            <br/>
            {this.renderInputs()}
        </div>
        )
    }
}

export default GPA;