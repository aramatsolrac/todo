import {useState, ChangeEvent, KeyboardEvent}  from 'react';
import { v4 as uuid } from 'uuid';

type TodoType = {
    id: string;
    content: string;
}


const Todo = () => {
    const [todos, setTodos] = useState<TodoType[]>([]);
    const [content, setContent] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(
            event.target.value
        );
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const id = uuid();
            setTodos([{id, content}, ...todos]);
            setContent('');
        }
    }


    return (
    <div>
        <h2>Todos</h2>
        <input
            type='text'
            data-testid="todo-input"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
        {todos.map((todo :TodoType) => (
            <div key={todo.id}>{todo.content}</div>
        ))}
    </div>
  );
}

export {Todo}
