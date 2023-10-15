import { TodoList } from './TodoList';
import { useTodos } from '../hooks/useTodos';
import { TodoType } from '../types/types';
import { CategoryList } from './CategoryList';
import '../styles/Todo.css';
import { SearchInput } from './SearchInput';
import { TodoInput } from './TodoInput';

const Todo = ({ items }: { items?: TodoType[]; }) => {
    const {
        displayTodos,
        addTodo,
        toggleItem,
        deleteItem,
        setCategory,
        categories,
        search } = useTodos(items);

    const { total, active, completed } = categories;

    return (
        <div className='todo-container'>
            <h1 className='todo-header'>Todos</h1>
            <TodoInput onAddTodo={addTodo} />
            <SearchInput onSearch={search} />
            <CategoryList
                categories={{ total, active, completed }}
                switchCategory={setCategory}
            />
            <TodoList
                todos={displayTodos}
                onToggleItem={toggleItem}
                onDeleteItem={deleteItem} />

        </div>
    );
};

export { Todo };
