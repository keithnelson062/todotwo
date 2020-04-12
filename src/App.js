
import React, {Component} from 'react';
import NewForm from './NewForm';
import Mytodolist from './Mytodolist';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {message: "I'm working",
    newTodo: "",
    todos:[]
};
}
newTodoChange(event){
  //console.log(event.target.value);
  this.setState({
    newTodo: event.target.value
  });
}

formSubmitted(event){
  event.preventDefault();
  //console.log(this.state.newTodo);
  this.setState({
    newTodo:"",
    todos: [...this.state.todos,{
      title: this.state.newTodo,
      done: false
    }]
  });
}
donetodo(event, index){

  const todos = [...this.state.todos];
  todos[index] =
    {...todos[index],
      done: event.target.checked
  };
  todos[index].done = event.target.checked;
  this.setState({
    todos
  });
  console.log(todos);
}

remove(index){
  const todos = [...this.state.todos];
  todos.splice(index,1);
  this.setState({
    todos
  });
}
removeall(){
  const todos = this.state.todos.map(todo => {
    return {
      title: todo.title,
      done: true
    };
  });
  this.setState({
    todos
  });
}

render(){
  return(
    <div className="App">
      <h1>{this.state.message}</h1>
        <NewForm
        newTodo={this.state.newTodo}
        formSubmitted ={this.formSubmitted.bind(this)}
        newTodoChange = {this.newTodoChange.bind(this)}

        />
      <button onClick={()=> this.removeall()}>Remove all</button>
      <ul>

        {this.state.todos.map((todo, index)=>{
          return (<li key={todo.title}>
            <input onChange = {(event) => this.donetodo(event, index)}type="checkbox" checked={todo.done}/>
            <span style ={{textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span>
            <button onClick={() => this.remove(index)}>Remove</button>
            </li>);
      })}
      </ul>
    </div>
    );
  }
}

export default App;
