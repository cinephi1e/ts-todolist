import React, { useState } from "react";
import Todo from "../models/Todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
  toggleTodo: (id: string) => {},
});

export const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
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

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    toggleTodo: toggleTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodoContextProvider;
