import { useState, useMemo }  from 'react';
import { TodoType } from '../types/types';

const useTodos = (items: TodoType[] = []) => {
    const [todos, setTodos] = useState<TodoType[]>(items);
    const [category, setCategory] = useState<string>("total");
    const [query, setQuery] = useState<string>("");

    const completed = useMemo(() => todos.filter(todo => todo.completed), [todos]);
    const active = useMemo(() => todos.filter(todo => !todo.completed), [todos]);

    const displayTodos = useMemo(() => {
        function getDisplayTodos() {
            switch (category) {
                case "completed":
                    return completed;
                case "active":
                    return active;
                case "total":
                    return todos;
                default:
                    return todos;
            }
        }
        const items = getDisplayTodos();
        if (query.length) {
            return items.filter(item => item.content.includes(query));
        }
        return items;

    }, [todos, category, completed, active, query]);

    const categories = useMemo(() => {
        return {
            completed: completed.length,
            active: active.length,
            total: todos.length
        }
    }, [todos, completed, active]);

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

    const search = (query: string) => {
        setQuery(query);
    }

    const favoriteItem = (todo: TodoType) => {
        const updatedTodos = todos.map(item => {
            if (item.id === todo.id) {
                return {...todo, favorite: !todo.favorite};
            }
            console.log(item);
            return item;
        });
        setTodos(updatedTodos);
    }

    return {
        displayTodos,
        addTodo,
        toggleItem,
        deleteItem,
        setCategory,
        categories,
        search,
        favoriteItem
    };
}

export {useTodos};
