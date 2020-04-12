import React from 'react';


const NewForm = (props) => {
  return(
    <form onSubmit ={props.formSubmitted}>
      <label htmlFor="newTodo">new Todo</label>
      <input onChange={props.newTodoChange} id="newTodo" name ="newTodo" value={props.newTodo}/>
      <button type="submit"> Add Todo</button>
    </form>
  )
}

export default NewForm;
