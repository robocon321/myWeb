import React, {Component} from 'react';

class ChangeButton extends Component{
    constructor(){
        super();
        console.log("Constructor ChangeButton called");
    }
    componentDidMount(){
        console.log("Component Did mount called : ChangeButton");
    }
    componentDidUpdate(){
        console.log("Component Did Update called : ChangeButton");
    }
    componentDidCatch(){
        console.log("Component Did Catch called : ChangeButton");
    }
    componentWillMount(){
        console.log("Component Will Mount: ChangeButton");
    }
    componentWillUnmount(){
        console.log("Component will UnMount: ChangeButton");
    }
    render(){
        console.log("Render ChangeButton");
        const {eventIncrease,eventDecrease,value}=this.props;
        return(
            <div className="change-button">
                <button className="increase" onMouseDown={eventIncrease}>+</button>
                <input type="text" disabled="false" className="result" value={value}/>
                <button className="decrease" onMouseDown={eventDecrease}>-</button>
            </div>
        )
    }
}

export default ChangeButton;