import React, {Component} from 'react';
import {Input } from 'reactstrap'

import { Form, Row, Col, Card, Button , FormControl} from 'react-bootstrap';

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
        }
    }

    calculateGPA(){
        console.log(this.state)
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

    render(){
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
        )
    }
}

export default GPA;