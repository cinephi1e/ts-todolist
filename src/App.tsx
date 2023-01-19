import styled from "styled-components";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import TodoContextProvider from "./store/todos-context";
const App = () => {
  return (
    <TodoContextProvider>
      <Container>
        <NewTodo />
        <TodoList />
      </Container>
    </TodoContextProvider>
  );
};

export default App;

const Container = styled.div`
  width: 600px;
  min-height: 800px;
  margin: 100px auto;
  border: 2px solid;
`;
