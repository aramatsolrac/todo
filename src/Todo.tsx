import { useState }  from 'react';
import { TodoType } from './types';
import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';


const Todo = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const onAddTodo = (todo: TodoType) => {
        setTodos([todo, ...todos]);
    }

    return (
    <div>
        <h2>Todos</h2>
        <TodoInput onAddTodo={onAddTodo} />
        <TodoList todos={todos} />
    </div>
  );
}

export {Todo}
