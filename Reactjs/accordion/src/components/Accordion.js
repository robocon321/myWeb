import React,{Component} from 'react';
import classNames from 'classnames/bind';
class Accordion extends Component{
    render(){
        return(
            <div className="bound">
                <div className="parent" onClick={this.props.onClick}>{this.props.title}</div>
                <div className={classNames('child',this.props.isCollapse ? 'collapse':'')}>{this.props.children}</div>
            </div>
        )
    }
}

export default Accordion;