import {ChangeEvent, KeyboardEvent as ReactKeyboardEvent, useState} from "react";
import {TodoInputProps} from "../types/types";
import { v4 as uuid } from 'uuid';
import { useComandAndKey } from "../hooks/useCommandAndKey";

const TodoInput = ({onAddTodo}: TodoInputProps) => {
    const [content, setContent] = useState<string>("");

    const inputRef = useComandAndKey('k');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setContent(event.target.value);
    }

    const handleKeyDown = (event: ReactKeyboardEvent) => {
        if (event.key === 'Enter') {
            const id = uuid();
            onAddTodo({id, content, completed: false});
            setContent('');
        }
    }

    return (
        <input
            ref={inputRef}
            className="todo-input"
            type='text'
            data-testid="todo-input"
            placeholder="Add a todo..."
            value={content}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            />
    )
}

export {TodoInput};
