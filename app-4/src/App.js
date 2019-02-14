import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      username: '',
      password: ''
    }
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.login = this.login.bind(this);
  }

  handleUsername(evt) {
    this.setState({
      username: evt.target.value
    })
  }

  handlePassword(evt) {
    this.setState({
      password: evt.target.value
    })
  }

  login(){
    return alert(`You logged in with Username: ${this.state.username} and Password: ${this.state.password}`)
  }

  render() {
    return(
      <div className = 'App'>
        <input 
          value={this.state.username}
          onChange={this.handleUsername} 
          placeholder='Username'>
        </input>
        <input 
          value={this.state.password}
          onChange={this.handlePassword} 
          placeholder='Password'>
        </input>
        <button onClick={this.login}>LOGIN</button>
      </div>
    )
  }
}

export default App;
