import React from "react";
import styled from "styled-components";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";

const Contents: React.FC<{
  items: Todo[];
  onRemoveTodo: (id: string) => void;
}> = (props) => {
  return (
    <Container>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item.todo}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </Container>
  );
};

export default Contents;

const Container = styled.div`
  padding: 0 35px;
`;

const List = styled.div`
  margin: 20px 0;
  padding-bottom: 15px;
  border-bottom: 1px dashed;
`;
