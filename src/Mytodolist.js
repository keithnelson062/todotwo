import React from 'react';
import Todoitem from './Todoitem';
const Mytodolist = (props) => {
return (
      <ul>
          {props.state.todos.map((todo, index)=>{
          return (
            <Todoitem
            key ={index}
            index = {index}
            todo ={todo}
            donetodo = {props.donetodo}
            remove = {props.remove}
            />
           )
      })}
      </ul>
     );
};

export default Mytodolist;
