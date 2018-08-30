import React from 'react';
import uuid from 'uuid';
import { TodoItem } from './TodoItem';

const TodoList = ({todos}) => {

  const items = todos.map((todo, i) => <TodoItem key={uuid()} todo={todo}/>);

  return (
    <div>
      {items}
    </div>
  )
};

export {
  TodoList,
};
