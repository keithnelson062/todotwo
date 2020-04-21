//import './index.css';
import React, { Component } from 'react';
class NewForm extends Component {
constructor(props) {
    super(props);
    this.newTodoChange = this.newTodoChange.bind(this);
}
  newTodoChange(event){
  console.log(event.target.value);
   this.props.newTodoChange();
  }
   render() {
       return (
         <form onSubmit ={this.props.formSubmitted}>
           <label htmlFor="newTodo"></label>
           <input onChange={this.props.newTodoChange} id="newTodo" name ="newTodo" value={this.props.newTodo}/>
           <button type="submit"> Add Todo</button>
         </form>
       );
   }
}


//import './App.css';


export default NewForm;
