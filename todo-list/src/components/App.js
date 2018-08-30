import React, { Component } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

class App extends Component {

  state = {
    todos: ['Item 1', 'Item 2'],
  };

  onNewTodoHandler = (newTodo) => {
    this.setState({
      todos: [newTodo, ...this.state.todos],
    });
  };

  render() {
    return (
      <div>
        <TodoForm onNewTodo={this.onNewTodoHandler}/>
        <TodoList todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
