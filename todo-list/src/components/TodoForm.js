import React, { Component } from 'react';
import { TodoList } from './TodoList';

class TodoForm extends Component {

  state = {
    newTodo: '',
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.props.onNewTodo(this.state.newTodo);
    this.setState({
      newTodo: '',
    });
  };

  onChangeHandler = (event) => {
    this.setState({
      newTodo: event.target.value,
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input value={this.state.newTodo} onChange={this.onChangeHandler} />
        <button>+</button>
      </form>
    );
  }
}

export { TodoForm };
