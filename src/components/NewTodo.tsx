import React, { useRef, useState } from "react";
import styled from "styled-components";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const textRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");

  const addTodo = (event: React.FormEvent) => {
    event.preventDefault();
    // const result = textRef.current!.value;
    if (text.trim().length === 0) {
      alert("내용을 입력해주세요.");
      return;
    }
    props.onAddTodo(text);
    setText("");
  };

  return (
    <Container>
      <Title>Todolist</Title>
      <Form onSubmit={addTodo}>
        <InputText
          type="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Btn>추가</Btn>
      </Form>
    </Container>
  );
};

export default NewTodo;

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-align: center;
`;

const Form = styled.form`
  text-align: center;
`;

const InputText = styled.input`
  width: 90%;
`;

const Btn = styled.button`
  margin-left: 5px;
`;
