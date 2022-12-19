import { FC,useState } from "react";
import { TodoList } from "./ToDoList";
import { AddTodoForm } from "./AddTodoForm";

type ToDoContainerProps = {
    initialTodos: Todo[]
}

export const ToDoContainer: FC<ToDoContainerProps> = ({initialTodos}) => {
    const [todos, setTodos] = useState(initialTodos);

const toggleTodo = (selectedTodo: Todo) => {
  const newTodos = todos.map((todo: Todo) => {
    if (todo === selectedTodo) {
      return {
        ...todo,
        complete: !todo.complete,
      };
    }
    return todo;
  });
  setTodos(newTodos);
};

const addTodo: AddTodo = (text: string) => {
  const newTodo = { text, complete: false };
  setTodos([...todos, newTodo]);
};

return (
  <div className='container'>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <AddTodoForm addTodo={addTodo} />
  </div>
);
}