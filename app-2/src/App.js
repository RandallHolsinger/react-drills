import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      foods: ['Spaghetti','Ice Cream','Sushi','Bologna','Cheese']
    }
  }
 
  render(){
    let mappedFoods = this.state.foods.map((food, index)=> {
      return (
      <h2 key={index}>{food}</h2>
      )
    })
    return(
      <div className='App'>
        {mappedFoods}
      </div>
    )
  }
}

export default App;