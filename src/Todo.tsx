import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { useTodos } from './useTodos';
import './Todo.css';


const Todo = () => {
    const {todos, addTodo, toggleItem, deleteItem} = useTodos();

    return (
    <div className='todo-container'>
        <h2 className='todo-header'>Todos</h2>
        <TodoInput onAddTodo={addTodo} />
        <TodoList
            todos={todos}
            onToggleItem={toggleItem}
            onDeleteItem={deleteItem}
        />
    </div>
  );
}

export {Todo}
