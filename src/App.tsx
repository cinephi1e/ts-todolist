import { useState } from "react";
import styled from "styled-components";
import Todo from "./models/Todo";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos([...todos, newTodo]);
  };

  const removeTodoHandler = (todoId: string) => {
    const newList = todos.filter((todo) => todo.id !== todoId);
    window.confirm("정말 삭제하시겠습니까?")
      ? setTodos(newList)
      : todos.map(() => {});
  };

  const toggleTodoHandler = (todoId: string) => {
    const newList = todos.map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else {
        return { ...todo };
      }
    });
    setTodos(newList);
  };

  return (
    <Container>
      <NewTodo onAddTodo={addTodoHandler} />
      <TodoList
        items={todos}
        onRemoveTodo={removeTodoHandler}
        onToggleTodo={toggleTodoHandler}
      />
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
