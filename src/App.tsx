import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import Contents from "./components/Contents";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos([...todos, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <Container>
      <NewTodo onAddTodo={addTodoHandler} />
      <Contents items={todos} onRemoveTodo={removeTodoHandler} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 600px;
  min-height: 800px;
  margin: 100px auto;
  border: 2px solid;
`;
