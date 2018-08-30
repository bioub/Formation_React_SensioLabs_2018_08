import React, { PureComponent } from 'react';
import uuid from 'uuid';
import { TodoItem } from './TodoItem';

class TodoList extends PureComponent {

  /*
  shouldComponentUpdate(nextProps) {
    return nextProps.todos !== this.props.todos;
  }
  */

  render() {
    console.log('render TodoList');
    const {todos} = this.props;

    const items = todos.map((todo, i) => <TodoItem key={uuid()} todo={todo}/>);

    return (
      <div>
        {items}
      </div>
    );
  }
}

export {
  TodoList,
};
