import { ToDoContainer } from './components/ToDoContainer';
import './index.css';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];


function App() {
return <ToDoContainer initialTodos={initialTodos}/>
}

export default App;
