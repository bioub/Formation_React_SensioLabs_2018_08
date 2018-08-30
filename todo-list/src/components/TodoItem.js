import React from 'react';
// import './TodoItem.css';

import styled from 'styled-components';

const TodoListStyle = styled.div`
  background: lightblue;
`;

const TodoItem = ({todo}) => <TodoListStyle>{todo}</TodoListStyle>;

export {
  TodoItem,
};
