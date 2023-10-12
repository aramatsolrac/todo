/**
 * Represents a todo item.
 */
export interface TodoType {
    id: string;
    content: string;
}

/**
 * Props for the TodoInput component.
 */
export interface TodoInputProps {
    /**
     * Callback function to be called when a new todo item is added.
     * @param todo The new todo item.
     */
    onAddTodo: (todo: TodoType) => void;
}
