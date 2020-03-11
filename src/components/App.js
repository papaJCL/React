import React, {Component} from 'react';
import Navigator from './Navigator.js'

import './styles.css'; 

class App extends Component{

    constructor(props) {
        super(props);

        this.setFinalAnswerState = this.setFinalAnswerState.bind(this);
        this.resetGPAState = this.resetGPAState.bind(this);

        this.state = {
            renderGPACalculator : false,
            finalGpaAnswer: null,
        }

    }

    render(){
        return (
            <center><div className = "tiledBackground" >
              <Navigator 
              finalGpaAnswer = {this.state.finalGpaAnswer} 
              setFinalAnswerState = {this.setFinalAnswerState}
              resetGPAState = {this.resetGPAState}
              />
            </div></center>
          );
    }

    setFinalAnswerState(answer){
        this.setState({
            finalGpaAnswer : answer
        });
    }

    resetGPAState(){
        this.setState({
            finalGpaAnswer : null
        });
    }
}

export default App;