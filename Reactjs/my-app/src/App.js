import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoItem from './components/TodoItem';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(){
    super();
    this.state={
      todoItem:
      [
      {title:"Eat rice",isCompleted:false},
      {title:"Learn English",isCompleted:false},
      {title:"Dance bboy",isCompleted:true},
      {title:"Sing a song",isCompleted:false}
    ],
      newItem:''
  }
    this.inputElement=React.createRef();
    this.onKeyUp=this.onKeyUp.bind(this);
    this.onChange=this.onChange.bind(this);
    
  }
  componentDidMount(){
    this.inputElement.current.focus();
  }
  onChange(event){
    var text=event.target.value;
    this.setState({
      ...this.state.todoItem,
      newItem:text
    })
  }
  onKeyUp(event){
    var text=event.target.value.trim();
    if(event.keyCode===13){
      if(!text){
        alert("Don't input your data");
      }else{
        this.setState({
          todoItem:[
            ...this.state.todoItem,
            {title:text,isCompleted:false}
          ],
          newItem:''
        })
      }
    }
  }
  onItemClicked(index){
    return ()=>{
      var todoItem=this.state.todoItem;
      this.setState({
        todoItem:[
          ...todoItem.slice(0,index),
          {...todoItem[index],isCompleted:!todoItem[index].isCompleted},
          ...todoItem.slice(index+1)
        ]
      })  
    }
  }
render(){
  return (
    <div className="App">
      <input className="input" type="text" placeholder="Add a item" value={this.state.newItem} onChange={this.onChange} onKeyUp={this.onKeyUp} ref={this.inputElement}/>
      {this.state.todoItem.length>0 ? this.state.todoItem.map((item,index)=>{
        return <ToDoItem key={index} item={item} onClick={this.onItemClicked(index)}/>
      }) : "Nothing here."}
    </div>
  );

}}

export default App;
