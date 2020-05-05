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
        if (this.state.country.length == 0){
            return ("GLOBAL STATS")
        }
        else{
            return (this.state.country.toUpperCase() + " STATS")
        }
    }


    render() {
        return (
            <div>
                <Jumbotron message="COVID TRACKER" pic="workingOnPic" />
                <Container>
                    <h4 className="w3">{this.returnTitle()}</h4>
                    <p className="w3-text-grey"><i>Last update:  </i>{new Date(this.state.data.lastUpdate).toDateString()}</p>
                    <div className="hr" />
                    <Countries setCountry={this.setCountry} />
                    <Cards data={this.state.data} />
                    <Chart data={this.state.data} country={this.state.country} />
                </Container>
            </div>
        )
    }
}

export default ToDo;