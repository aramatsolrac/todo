import {CategoryProps} from '../types/types';

export const Category = ({ label, number, type, switchCategory }: CategoryProps) => {
    return (
        <div className='categories-container'>
            <label className='categories-label'>{label}
                <button
                    className={`button ${type}`}
                    data-testid={`todo-${type}`}
                    onClick={() => switchCategory(type)}
                >{number > 0 ? number : '0'}
                </button>
            </label>
        </div>
    );
};
