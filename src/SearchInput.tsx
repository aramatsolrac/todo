import { SearchInputProps } from './types';

export const SearchInput = ({ onSearch }: SearchInputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                className='todo-input search'
                data-testid="todo-search"
                placeholder='Search todos...'
                onChange={handleChange} />
        </div>
    );
};
