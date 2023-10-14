import { Todo } from './Todo';
import { TodoType } from './types';

const items: TodoType[] = [
  {id: '1', content: 'buy some milk', completed: false},
  {id: '2', content: 'walk the dog', completed: true},
  {id: '3', content: 'do homework', completed: false},
];

function App() {
  
  return (
    <div >
      <Todo items={items}/>
    </div>
  );
}

export default App;
