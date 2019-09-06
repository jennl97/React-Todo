import React from 'react';

//components
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

//style
import "./components/Todo.css";


//data
const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

//setState
constructor(){
  super();
  this.state = {
    todoList: todoList
  };
}

addTodo = (e, todoItem) => {
  e.preventDefault();
  let newTodo = {
    task: todoItem,
    id: Date.now(),
    completed: false
  };
    this.setState({
    todoList: [...this.state.todoList, newTodo]
  });
  
};

clearTodo = e => {
  e.preventDefault();
  this.setState({
    todoList: this.state.todoList.filter(todo => !todo.completed)
  });
}

toggleTodo = todoId => {
  // console.log(todoId);
  this.setState({
    todoList: this.state.todoList.map(todo => {
      if (todo.id === todoId){
        return {...todo, completed: !todo.completed};
      }
      return todo;
    })
  });
};

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo={this.addTodo} />
        <div>
        <TodoList
          todoList={this.state.todoList}
          clearTodo={this.clearTodo}
          toggleTodo={this.toggleTodo}
        />
        </div>
      </div>
    );
  }
}

export default App;
