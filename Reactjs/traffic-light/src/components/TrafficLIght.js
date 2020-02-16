import React,{Component} from 'react';
import './TrafficLight.css';
const classNames=require('classnames');

const RED=0;
const YELLOW=1;
const GREEN=2;
class TrafficLight extends Component{
    render(){
        const {currentLightColor}=this.props;
        return(
           <div className="TrafficLight">
               <div className={classNames('bulb','red',{'active' : currentLightColor===RED})}></div>
               <div className={classNames('bulb','yellow',{'active' : currentLightColor===YELLOW})}></div>
               <div className={classNames('bulb','green',{'active' : currentLightColor===GREEN})}></div>
            </div>
        )
    }
}

export default TrafficLight;