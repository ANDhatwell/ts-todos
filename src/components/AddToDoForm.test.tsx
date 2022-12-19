import { render, screen } from '@testing-library/react';
import { AddTodoForm } from './AddTodoForm';

describe('AddToDoForm', () => {
  it('should render todos', () => {
    const addTodo = jest.fn();
    render(<AddTodoForm addTodo={addTodo} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  });
});
