import React from "react";
import styled from "styled-components";

const TodoItem: React.FC<{ todo: string; onRemoveTodo: () => void }> = (
  props
) => {
  return (
    <List>
      {props.todo}
      <Btn onClick={props.onRemoveTodo}>삭제</Btn>
    </List>
  );
};

export default TodoItem;

const List = styled.div`
  margin: 20px 0;
  padding-bottom: 15px;
  border-bottom: 1px dashed;
`;

const Btn = styled.button`
  float: right;
`;
