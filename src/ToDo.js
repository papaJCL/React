import React, { Component } from 'react';
import { Jumbotron } from './components/Jumbotron';
import { Container } from 'react-bootstrap';
import Cards from './covid/Cards/Cards'
import Countries from './covid/Countries/Countries'
import Chart from './covid/Chart/Chart'
import { getData } from './covid/api/'


class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {} , 
            country: '',
        }

    }

    async componentDidMount() {
        const data = await getData();
        this.setState({ data: data });
    }

    setCountry = async (country) => {
        const fetchedCountries = await getData(country);
        this.setState({data: fetchedCountries, country: country });
    }

    returnTitle(){
        console.log("this.state.country " , this.state.country)
        if (this.state.country.length == 0){
            return ("GLOBAL STATS")
        }
        else{
            // console.log("Landed here " , this.state.country.toUpperCase())
            return (this.state.country.toUpperCase() + " STATS")
        }
    }

    renderUpdatedInfo(){
        return(
        <p className="w3-text-grey">
        {   "1. For the letter grade column, put in your letter grade(A through F)\n" +
            "2. For the credits column put how many credits its worth\n" +
            "3. Leave the rest of the rows blank once you've put all your classes in\n" +
            "4. Press Calculate when done"}
        </p>
        )
    }

    render() {
        return (
            <div>
                <Jumbotron message="COVID TRACKER" pic="workingOnPic" />
                <Container>
                    <h4 className="w3">{this.returnTitle()}</h4>
                    <p className="w3-text-grey"><i>Last update:  </i>{new Date(this.state.data.lastUpdate).toDateString()}</p>
                    <div className="hr" />
                    <br/>
                    <Countries setCountry={this.setCountry} />
                    {<Cards data={this.state.data} />}
                    <Chart data={this.state.data} country={this.state.country} />
                </Container>
            </div>
        )
    }
}

export default ToDo;