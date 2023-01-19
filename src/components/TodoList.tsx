import React from "react";
import styled from "styled-components";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

const TodoList: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
  onToggleTodo: (id: string) => void;
}> = (props) => {
  return (
    <Container>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item.todo}
          isDone={item.isDone}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
          onToggleTodo={props.onToggleTodo.bind(null, item.id, item.isDone)}
        />
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  padding: 0 35px;
`;
