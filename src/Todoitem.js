import React from 'react';

const Todoitem = (props) =>{
  const {todo, index} = props;
  return(
    <li key={this.props.id}>
      <input onChange = {(event) => props.donetodo(event, index)}type="checkbox" checked={props.todo.done}/>
      <span style ={{textDecoration: props.todo.done ? 'line-through' : 'inherit'}}>{props.todo.title}</span>
      <button onClick={() => props.remove(index)}>Remove</button>
      </li>

  );



};

export default Todoitem;
