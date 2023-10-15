import { TodoList } from './TodoList';
import { TodoInput } from './TodoInput';
import { useTodos } from './useTodos';
import { TodoType } from './types';
import { CategoryList } from './CategoryList';
import './Todo.css';
import { SearchInput } from './SearchInput';

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
            <h2 className='todo-header'>Todos</h2>
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
