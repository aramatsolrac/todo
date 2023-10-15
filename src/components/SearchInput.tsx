import { ChangeEvent } from 'react';
import { SearchInputProps } from '../types/types';
import { useComandAndKey } from '../hooks/useCommandAndKey';

export const SearchInput = ({ onSearch }: SearchInputProps) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    const inputRef = useComandAndKey('s');

    return (
        <div>
            <input
                ref={inputRef}
                type="text"
                className='todo-input search'
                data-testid="todo-search"
                placeholder='Search todos...'
                onChange={handleChange} />
        </div>
    );
};
