import {ChangeEvent, KeyboardEvent, useState} from "react";
import {TodoInputProps} from "./types";
import { v4 as uuid } from 'uuid';

const TodoInput = ({onAddTodo}: TodoInputProps) => {
    const [content, setContent] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const id = uuid();
            onAddTodo({id, content});
            setContent('');
        }
    }
    return (
        <input
            type='text'
            data-testid="todo-input"
            value={content}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
    )
}

export {TodoInput};
