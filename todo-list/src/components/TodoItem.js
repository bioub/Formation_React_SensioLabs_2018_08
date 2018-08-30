import React from 'react';
import styled from 'styled-components';
// import './TodoItem.css';

const TodoListStyle = styled.div`
  background: lightblue;
`;

const TodoItem = ({todo}) => <TodoListStyle>{todo}</TodoListStyle>;

export {
  TodoItem,
};
