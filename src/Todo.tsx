import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { useTodos } from './useTodos';
import './Todo.css';
import { TodoType } from './types';


const Todo = ({items}: {items?: TodoType[]}) => {
    const {displayTodos, addTodo, toggleItem, deleteItem, setCategory} = useTodos(items);

    return (
    <div className='todo-container'>
        <h2 className='todo-header'>Todos</h2>
        <TodoInput onAddTodo={addTodo} />
        <div className='categories-container'>
            <button
                className='button total'
                data-testid='todo-total'
                onClick={() => setCategory('total')}
                >Total</button>
            <button
                className='button active'
                data-testid='todo-active'
                onClick={() => setCategory('active')}
                >Active</button>
            <button
                className='button completed'
                data-testid='todo-completed'
                onClick={() => setCategory('completed')}
                >Completed</button>
        </div>
        <TodoList
            todos={displayTodos
            }
            onToggleItem={toggleItem}
            onDeleteItem={deleteItem}
        />
    </div>
  );
}

export {Todo}
