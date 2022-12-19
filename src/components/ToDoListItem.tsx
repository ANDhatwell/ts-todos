import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, toggleTodo }) => {
  return (
    <li>
      <label
      >
        <input
          type='checkbox'
          checked={todo.complete}
          onChange={() => {
            toggleTodo(todo);
          }}
        />{' '}
       {` ${todo.text} ${todo.complete ? '✅' : '❌'}`}
      </label>
    </li>
  );
};
  