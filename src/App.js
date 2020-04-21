
import React, {Component} from 'react';
import NewForm from './NewForm';
import Mytodolist from './Mytodolist';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {todos:[]};
}
componentDidMount(){
var self = this;
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var todos = JSON.parse(this.responseText);
      console.log(todos);
      self.setState({
        todos : todos
      })
      //  document.getElementById('something').innerText = todos[0].text;
    }
  };
  xhttp.open("GET", "https://cse204.work/todos", true);
  xhttp.setRequestHeader("x-api-key","30d13a-0ba7a8-ff8e65-308853-7227bc");
  xhttp.send();
}
//lecture 19

newTodoChange(event){
  console.log(event.target.value);
  event.preventDefault();

  this.setState({
    todos: event.target.value
  });
}

formSubmitted(event){
event.preventDefault();
//console.log(this.state.newTodo);
var self = this;
var data = {
    text: "Some Text"
}
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var todos = JSON.parse(this.responseText);
    //self.setState({todos: [...self.state.todos, JSON.parse(this.responseText)})

    console.log(todos);
    data.text =
    //  document.getElementById('something').innerText = todos[0].text;
    self.setState({
      newTodo:"",
      todos: [...self.state.todos,]
    });
  }
};
xhttp2.open("POST", "https://cse204.work/todos", true);
xhttp2.setRequestHeader("Content-type", "application/json");
xhttp2.setRequestHeader("x-api-key", "30d13a-0ba7a8-ff8e65-308853-7227bc");
xhttp2.send(JSON.stringify(data));


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
  var todos;
  var response;
  var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var reponse = JSON.parse(this.responseText);
      console.log(response.text);
      //  document.getElementById('something').innerText = todos[0].text;
      todos = [...this.state.todos];
      todos.splice(index,1);
      this.setState({
        todos
      });
    }
};
xhttp.open("DELETE", "https://cse204.work/todos" + response[index].id, true);
xhttp.setRequestHeader("x-api-key","30d13a-0ba7a8-ff8e65-308853-7227bc");
xhttp.send();

  // delete AJAx before at the start of the function
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
      <h1>Something</h1>
        <NewForm
        newTodo={this.state.newTodo}
        formSubmitted ={this.formSubmitted.bind(this)}
        newTodoChange = {this.newTodoChange.bind(this)}
        />
    //  <button onClick={()=> this.removeall()}>Remove all</button>
      <ul>
        {this.state.todos.map((todo, index)=>{
          return (<li key={todo.id}>
            <input onChange = {(event) => this.donetodo(event, index)}type="checkbox" checked={todo.done}/>
            <span style ={{textDecoration: todo.done ? 'line-through' : 'inherit'}}>{todo.title}</span>
            <button className="remove addBtn" onClick={() => this.remove(index)}>Remove</button>
            </li>);
      })}
      </ul>
    </div>
    );
  }
}

export default App;
