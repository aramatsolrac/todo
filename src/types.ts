import { type } from "os";
import { Category } from "./Category";

/**
 * Represents a todo item.
 */
export interface TodoType {
    id: string;
    content: string;
    completed: boolean;
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

/**
 * Props for the TodoList component.
 */

export interface TodoListProps {

    /**
     * The list of todo items.
     */
    todos: TodoType[];

    /**
     * Callback function to be called when a todo item is toggled.
     * @param id The id of the todo item.
     */
    onToggleItem: (id: string) => void;
    onDeleteItem: (todo: TodoType) => void;
}


export interface CategoryProps {
    label: string;
    number: number;
    type: string;
    switchCategory: (label: string) => void;
}

export interface CategoryType {
    total: number;
    completed: number;
    active : number;
}

export interface CategoryListProps {
    categories: CategoryType;
    switchCategory: (label: string) => void;
}
