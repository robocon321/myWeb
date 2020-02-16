import React,{Component} from 'react';
import './TodoItem.css';
import isCheckImage_No from '../image/iconfinder_Checkmark_1891021.png';
import isCheckImage_Yes from '../image/iconfinder_Close_1891023.png';
import PropTypes from 'prop-types';


class ToDoItem extends Component{
    render(){
        var {item, onClick} =this.props;
        var className= item.isCompleted? "TodoItem completed" : "TodoItem";
        var url=item.isCompleted ? isCheckImage_Yes:isCheckImage_No;
        
        return (
            <p className={className}><img src={url} onClick={onClick}/>{item.title}</p>
        )
    }
}
ToDoItem.propTypes ={
    item : PropTypes.shape({
        title:PropTypes.string.isRequired,
        isCompleted:PropTypes.bool.isRequired // isRequire : không thể thiếu thuộc tính này
    }),
    onClick : PropTypes.func.isRequired
} // Truyền đối một cách đúng dữ liệu

export default ToDoItem;