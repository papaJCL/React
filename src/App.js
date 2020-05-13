import React, { Component } from 'react';
import GPA from './GPA.js'
import Home from './Home.js'
import Intro from './Intro.js'
import ToDo from './ToDo.js'
import Trip from './Trip.js'
import { NavigationBar } from './components/NavigationBar';
import { Layout } from './components/Layout'
import { NoMatch } from './NoMatch';
import Info from './Info.js'
import { BrowserRouter  as Router, Route, Switch, Redirect  } from 'react-router-dom';
import './css/styles.css';



class App extends Component {

  constructor(props) {
    super(props);

    this.setFinalAnswerState = this.setFinalAnswerState.bind(this);
    this.resetGPAState = this.resetGPAState.bind(this);

    this.state = {
      renderGPACalculator: false,
      finalGpaAnswer: null,
    }

  }



  render() {
    return (
      <div>
        <Router>
          <NavigationBar />
            <Switch>
              <Route exact path="/index.html" component={Home} />
              <Route exact path="/" component={Intro} />
              <Route path="/GPA"
                render={() => (<GPA
                  finalGpaAnswer={this.state.finalGpaAnswer}
                  setFinalAnswerState={this.setFinalAnswerState}
                  resetGPAState={this.resetGPAState}
                />)} />
              <Route path="/ToDo" component={ToDo} />
              <Route path="/Home" component={Home} />
              <Route path="/Trip" component={Trip} />
              <Route path="/Info" component={Info} />
              <Route component={Home} />
            </Switch>
        </Router>
      </div>
    )
  }

  setFinalAnswerState(answer) {
    this.setState({
      finalGpaAnswer: answer
    });
  }

  resetGPAState() {
    this.setState({
      finalGpaAnswer: null
    });
  }
}

export default App;
