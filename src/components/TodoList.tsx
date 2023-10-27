import {TodoListProps, TodoType} from '../types/types';

const TodoList = ({todos, onToggleItem, onDeleteItem, onFavoriteItem}: TodoListProps) => {
    return (
        <>
        {todos.map((todo :TodoType) => (
            <div
                key={todo.id}
                className="todo-item-container"
                data-testid="todo-item"
            >
            <span
                className="todo-item"
                onClick={() => onToggleItem(todo.id)}
                data-completed={todo.completed}>
                {todo.content}</span>
            <button
                className="favorite-button"
                data-testid="favorite-button"
                onClick={() => onFavoriteItem(todo)}
                data-favorite={todo.favorite}
            />
            <button
                className="delete-button"
                data-testid="delete-button"
                onClick={() => onDeleteItem(todo)}
            />
            </div>
        ))}
        </>
    )
}

export {TodoList};
