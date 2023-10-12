import {TodoType} from './types';

const TodoList = ({todos}: {todos: TodoType[]}) => {
    return (
        <>
        {todos.map((todo :TodoType) => (
            <div key={todo.id}>{todo.content}</div>
        ))}
        </>
    )
}

export {TodoList};
