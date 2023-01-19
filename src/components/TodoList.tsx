import React, { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodosContext } from "../store/todos-context";

const TodoList: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <Container>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item.todo}
          isDone={item.isDone}
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          onToggleTodo={todosCtx.toggleTodo.bind(null, item.id)}
        />
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  padding: 0 35px;
`;
