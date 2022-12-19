import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ToDoContainer } from './ToDoContainer';

describe('AddToDoForm', () => {
  it('should render todos', () => {
    render(<ToDoContainer  initialTodos={[{text:'Change the sheets', complete: false}]}/>);
    const textBox = screen.getByRole('textbox');
    const button = screen.getByRole('button');

    expect(screen.getByText(/change the sheets/i)).toBeInTheDocument()

    userEvent.type(textBox, 'make birthday cake')

    userEvent.click(button);
    expect(screen.getByText(/make birthday cake ❌/i)).toBeInTheDocument()
    expect(textBox).toHaveTextContent('')

    const newToDoCheckBox = screen.getByRole('checkbox', { name: /make birthday cake/i })
    userEvent.click(newToDoCheckBox)
    expect(screen.getByText(/make birthday cake ✅/i)).toBeInTheDocument()



  });
});
