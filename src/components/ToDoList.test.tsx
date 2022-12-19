import { render, screen } from "@testing-library/react";
import { TodoList } from "./ToDoList";

describe('ToDoList', () => {
  it('should render todos', () => {
    const testTodoListItems = [
      { text: 'go to the doctor', complete: false },
      { text: 'feed the fish', complete: true },
      { text: 'buy christmas pudding', complete: true },
    ];

    render(<TodoList todos={testTodoListItems} toggleTodo={jest.fn()}/>)
    const toDoElements = screen.getAllByRole('listitem')
    expect(toDoElements).toHaveLength(testTodoListItems.length)
    toDoElements.forEach((element, index)=> expect(element).toHaveTextContent(testTodoListItems[index].text))
  });

  it('should render empty', ()=>{
    render(<TodoList todos={[]} toggleTodo={jest.fn()}/>)
    expect(screen.queryAllByRole('lisitem')).toHaveLength(0)
  })

});
