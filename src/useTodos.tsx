import { useState, useMemo }  from 'react';
import { TodoType } from './types';

const useTodos = (items: TodoType[] = []) => {
    const [todos, setTodos] = useState<TodoType[]>(items);
    const [category, setCategory] = useState<string>("total");

    const displayTodos = useMemo(() => {
        switch (category) {
            case "completed":
                return todos.filter(todo => todo.completed);
            case "active":
                return todos.filter(todo => !todo.completed);
            case "total":
                return todos;
            default:
                return todos;
        }
    }, [todos, category]);

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

    return {
        displayTodos,
        addTodo,
        toggleItem,
        deleteItem,
        setCategory
    };
}

export {useTodos};
