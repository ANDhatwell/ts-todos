import { render, screen } from "@testing-library/react"
import { TodoListItem } from "./ToDoListItem"
import userEvent from "@testing-library/user-event"

describe('ToDoListItem', ()=>{
    const toggleTodo = jest.fn()
        it('should render uncomplete todo', ()=>{
        render(<TodoListItem todo={{text:"Get a haircut", complete: false}} toggleTodo={toggleTodo}/>)
        expect(screen.getByText(/get a haircut/i)).toBeInTheDocument()
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).not.toBeChecked()
    })

    it('should render complete todo', ()=>{
        render(<TodoListItem todo={{text:"Get a haircut", complete: true}} toggleTodo={toggleTodo}/>)
        expect(screen.getByText(/get a haircut/i)).toBeInTheDocument()
        const checkbox = screen.getByRole('checkbox')
        expect(checkbox).toBeChecked()
    })

    it('should complete todo', ()=>{
    const todo: Todo = {text: 'Go to the post office', complete: false}
    render(<TodoListItem todo={todo} toggleTodo={toggleTodo}/>)
    expect(screen.getByText(/go to the post office/i)).toBeInTheDocument()
    const checkbox = screen.getByRole('checkbox')
    userEvent.click(checkbox)
    expect(toggleTodo).toHaveBeenCalledWith(todo)
})
})