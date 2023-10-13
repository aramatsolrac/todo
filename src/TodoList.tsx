import {TodoListProps, TodoType} from './types';

const TodoList = ({todos, onToggleItem}: TodoListProps) => {
    return (
        <>
        {todos.map((todo :TodoType) => (
            <div
                className="todo-item"
                key={todo.id}
                data-completed={todo.completed}
                onClick={() => onToggleItem(todo.id)}
            >
            {todo.content}</div>
        ))}
        </>
    )
}

export {TodoList};
