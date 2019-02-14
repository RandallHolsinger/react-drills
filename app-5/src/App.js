import React, { Component } from 'react';
import Image from './child'
import './App.css';

class App extends Component {
  render(){
     return (
       <div className='App'>
           <Image image='https://pbs.twimg.com/media/CLVrFSyWsAAOjQo.jpg'/>
       </div>
     )
    }
}
 
export default App;
