import React from "react";
import styled from "styled-components";

const TodoItem: React.FC<{
  todo: string;
  isDone: boolean;
  onRemoveTodo: () => void;
  onToggleTodo: () => void;
}> = (props) => {
  return (
    <>
      {props.isDone ? (
        <DoneList>
          {props.todo}
          <Btn onClick={props.onRemoveTodo}>삭제</Btn>
          <Btn onClick={props.onToggleTodo}>취소</Btn>
        </DoneList>
      ) : (
        <List>
          {props.todo}
          <Btn onClick={props.onRemoveTodo}>삭제</Btn>
          <Btn onClick={props.onToggleTodo}>완료</Btn>
        </List>
      )}
    </>
  );
};

export default TodoItem;

const List = styled.div`
  margin: 20px 0;
  padding-bottom: 15px;
  border-bottom: 1px dashed;
`;

const DoneList = styled.div`
  margin: 20px 0;
  padding-bottom: 15px;
  border-bottom: 1px dashed;
  text-decoration: line-through;
  text-decoration-thickness: 2px;
  text-decoration-color: red;
`;

const Btn = styled.button`
  float: right;
  &:last-child {
    margin-right: 5px;
  }
`;
