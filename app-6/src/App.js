import React, {Component} from 'react';
import './App.css'
import Todo from './Todo'
class App extends Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
      userInput: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleUserInput(evt) {
    this.setState({
      userInput: evt.target.value
    })
  }

  handleAddTask(){
    this.setState({
      tasks: [...this.state.tasks, this.state.userInput],
      userInput:'',
    })
  }

  render() {
    let mappedTasks = this.state.tasks.map((task, index) => {
      return (
        <Todo key={index} element={task}/>
      )
    })
    return (
      <div className='App'>
        <input onChange={this.handleUserInput}></input>
        <button onClick={this.handleAddTask}>ADD</button>
        {mappedTasks}
      </div>
    )
  }
}

export default App;
