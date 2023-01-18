import uuid from "react-uuid";

class Todo {
  id: string;
  todo: string;
  isDone: boolean;

  constructor(todoText: string) {
    this.todo = todoText;
    this.id = uuid();
    this.isDone = false;
  }
}

export default Todo;
