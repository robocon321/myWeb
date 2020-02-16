import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ChangeButton from './component/ChangeButton';

class App extends Component{
  constructor(){
    console.log("Constructor App called");
    super();
    this.eventDecrease=this.eventDecrease.bind(this);
    this.eventIncrease=this.eventIncrease.bind(this);
    this.state={
      value:0,
      remove:false
    }
  }
  eventIncrease(){
    this.setState({
      value:this.state.value+1
    })
  }
  eventDecrease(){
    this.setState({
      value:this.state.value-1
    })
  }
  componentDidMount(){
    console.log("Component Did mount called : App")
  }
  componentDidUpdate(){
    console.log("Component Did Update called : App");
  }
  componentDidCatch(){
    console.log("Component Did Catch called : App");
  }
  componentWillMount(){
    console.log("Component Will Mount: App");
  }
  componentWillUnmount(){
    console.log("Component will UnMount: App");
  }
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.value==nextState.value)
    return false;
    return true;
  }
  render(){
    console.log("Render App");
    return (
      <div className="App">
        <button className="remove" onClick={()=>{
          this.setState({
            remove:!this.state.remove
          })
        }}>Remove</button>
        {
          this.state.remove && <ChangeButton eventDecrease={this.eventDecrease} eventIncrease={this.eventIncrease} value={this.state.value} />
        }
      </div>
    )
  }
}

export default App;
