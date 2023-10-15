import { Category } from './Category';
import { CategoryListProps } from './types';

export const CategoryList = ({ categories, switchCategory }: CategoryListProps) => {
    return (
        <div className='categories-container'>
            {Object.entries(categories).map(([key, value]) => (
                <Category
                    key={key}
                    label={`${key.charAt(0).toUpperCase() + key.slice(1)}: `}
                    number={value as number}
                    type={key}
                    switchCategory={switchCategory}
                />
            ))}
        </div>
    );
};
