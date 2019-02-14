import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      foods: ['Spaghetti', 'Ice Cream', 'Sushi','Bologna', 'Cheese'],
      filteredString: ''
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
   

  handleFilterChange(evt){
    this.setState({
      filteredString: evt.target.value
    })
  }
  render(){
     let foodsToDisplay = this.state.foods.filter((food, index) => {
       return food.includes(this.state.filteredString);
     }).map((food, index) =>{
       return <h1 key={index}>{food}</h1>
     })
    return(
      <div className='App'>
        <input onChange={this.handleFilterChange}></input>
        {foodsToDisplay}
      </div>
    )
  }
}

export default App;