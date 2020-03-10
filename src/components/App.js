import React, {Component} from 'react';
import Navigator from './Navigator.js'

import './styles.css'; 

class App extends Component{

    constructor(props) {
        super(props);

        this.state = {
            renderGPACalculator : false,
        }

    }

    render(){
        console.log("Landed here mate")
        return (
            <center><div className = "tiledBackground" >
              <Navigator />
            </div></center>
          );
    }
}

export default App;