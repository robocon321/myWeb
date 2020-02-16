import React,{Component} from 'react';
import './App.css';
import Accordion from './components/Accordion';


class App extends Component {
  constructor(){
    super();
    this.state={
      content:[{title:"Section 1",isCollapse:false},
              {title:"Section 2",isCollapse:true},
              {title:"Section 3",isCollapse:false},
              {title:"Section 4",isCollapse:false}]
      }
    }
  onClick(index){
    return function(){
      var {content}=this.state;
      this.setState({
        content:[
          ...content.slice(0,index),
          {title:content[index].title,isCollapse:!content[index].isCollapse},
          ...content.slice(index+1)
        ]
      })
    }.bind(this);
  }
  render(){
      return (
      <div className="App">
        {this.state.content.map((item,index)=>{
          return <Accordion title={item.title} isCollapse={item.isCollapse} onClick={this.onClick(index)}>Ea nisi consequat est id enim velit dolor incididunt
           aliquip velit reprehenderit qui tempor. Quis pariatur qui ut elit. Ipsum reprehenderit duis dolor eiusmod enim enim culpa.
          Commodo et sit nisi culpa laboris. Reprehenderit non ad consectetur do voluptate ea sunt aliqua ea. 
          Ipsum pariatur aute exercitation commodo. Duis sint officia consequat voluptate proident tempor veniam.
          Eiusmod voluptate et minim ad anim veniam dolore amet cillum reprehenderit officia velit. 
          Esse cillum fugiat nulla quis enim eiusmod cillum nulla aute cillum irure adipisicing laborum nisi. 
          Quis ullamco non dolore laborum quis magna ea qui duis. Fugiat culpa veniam culpa irure incididunt enim eu. 
          Exercitation et officia amet consectetur excepteur sint occaecat mollit elit exercitation nulla officia.</Accordion>
        })}  
      </div>
    );
  
  }
}

export default App;
