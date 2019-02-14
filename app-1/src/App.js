import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(){
        super();

        this.state ={
            userinput: ''
        }
        this.handleUserInput = this.handleUserInput.bind(this);
    }


    handleUserInput(evt){
        this.setState({
            userinput: evt.target.value 
        })
    }

    render(){
        return(
            <div className='App'>
              <input onChange={this.handleUserInput} placeholder='Enter To Disply Here'></input>
              <h1>{this.state.userinput}</h1>
            </div>
        )
    }
}

export default App;
