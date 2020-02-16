import React,{Component, useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
import TrafficLight from './components/TrafficLIght';

const RED=0;
const YELLOW=1;
const GREEN=2;

class App extends Component {
  constructor(){
    super();
    this.state={
      currentLightColor:RED
    }
    setInterval(()=>this.setState({
      currentLightColor:this.getNextLightColor(this.state.currentLightColor)
    })
      ,1000);

  }
  getNextLightColor(color){
    switch(color){
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      case GREEN:
        return RED;
    }
  }
  render(){
    return (
      <div>
        <div className="head-light"></div>
        <TrafficLight currentLightColor={this.state.currentLightColor}/>
        <div className="tail-light"></div>
      </div>
    )
  }
}

export default App;
