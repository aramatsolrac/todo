import { useState }  from 'react';
import { TodoType } from './types';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import './Todo.css';


const Todo = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const onAddTodo = (todo: TodoType) => {
        setTodos([todo, ...todos]);
    }

    const onToggleItem = (id: string) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    return (
    <div className='todo-container'>
        <h2 className='todo-header'>Todos</h2>
        <TodoInput onAddTodo={onAddTodo} />
        <TodoList
            todos={todos}
            onToggleItem={onToggleItem}
        />
    </div>
  );
}

export {Todo}
