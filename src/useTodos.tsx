import { useState }  from 'react';
import { TodoType } from './types';


const useTodos = (items: TodoType[] = []) => {
    const [todos, setTodos] = useState<TodoType[]>(items);

    const addTodo = (todo: TodoType) => {
        setTodos([todo, ...todos]);
    }

    const toggleItem = (id: string) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed};
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const deleteItem = (todo: TodoType) => {
        const updatedTodos = todos.filter(item => item.id !== todo.id);
        setTodos(updatedTodos);
    }

    return {todos, addTodo, toggleItem, deleteItem};
}

export {useTodos};
