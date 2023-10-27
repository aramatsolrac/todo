import { render, screen, within } from '@testing-library/react';
import { TodoType } from '../types/types';
import { Todo } from '../components/Todo';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

const items: TodoType[] = [
  {id: '1', content: 'buy some milk', completed: false, favorite: true},
  {id: '2', content: 'walk the dog', completed: true, favorite: false},
  {id: '3', content: 'do homework', completed: false, favorite: false},
];


type Props = {
  item: TodoType;
  onItemClick: (id: string) => void;
  onDeleteClick: (id: string) => void;
  onFavoriteClick: (id: string) => void;
};

export const TodoItem: React.FC<Props> = ({ item, onItemClick, onDeleteClick, onFavoriteClick }) => {
  const handleItemClick = () => {
    onItemClick(item.id);
  };

  const handleDeleteClick = () => {
    onDeleteClick(item.id);
  };

  const handleFavoriteClick = () => {
    onFavoriteClick(item.id);
  };

  return (
    <li data-testid="todo-item" onClick={handleItemClick} data-completed={item.completed} data-favorite={item.favorite}>
      <span>{item.content}</span>
      <button onClick={handleDeleteClick}>Delete</button>
      <button onClick={handleFavoriteClick} data-testid="favorite-button">{item.favorite ? 'Unfavorite' : 'Favorite'}</button>
    </li>
  );
};

describe('Todo', () => {
  it('renders the title', () => {
    render(<Todo />);

    expect(screen.getByText('Todos')).toBeInTheDocument();
  });

  it('adds item to the list', async () => {
    render(<Todo />);

    const input = screen.getByTestId('todo-input');
    await userEvent.type(input, 'buy some milk');
    await userEvent.type(input, '{enter}');

    expect(screen.getByText('buy some milk')).toBeInTheDocument();
  });

  it('completes item on click', async () => {
    render(<Todo items={items}/>);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'walk the dog');
    userEvent.type(input, '{enter}');

    const item = screen.getByText('buy some milk');
    await userEvent.click(item);

    expect(item).toHaveAttribute('data-completed', 'true');
  });

  
  it.skip('delete an item when the button is clicked', () => {
    render(<Todo items={items}/>);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    const item = screen.getByText('buy some milk');
    expect(item).toBeInTheDocument();

    const deleteButtons = screen.getAllByTestId('delete-button');
    const deleteButton = deleteButtons[0]; 

    userEvent.click(deleteButton);
    expect(item).not.toBeInTheDocument();
  })


  it('renders a list of items', () => {
    render(<Todo items={items}/>);

    expect(screen.getByText('buy some milk')).toBeInTheDocument();
    expect(screen.getByText('walk the dog')).toBeInTheDocument();
    expect(screen.getByText('do homework')).toBeInTheDocument();
  });

    it.skip('favorites an item', async () => {
      render(<Todo items={items}/>);
      const input = screen.getByTestId('todo-input');
      userEvent.type(input, 'walk the dog');
      userEvent.type(input, '{enter}');

      const item = screen.getByText('buy some milk');
      const favoriteButtons = screen.getAllByTestId('favorite-button');
      const favoriteButton = favoriteButtons[0];

      await userEvent.click(favoriteButton);
      expect(item).toHaveAttribute('data-favorite', 'true');
    });
  });

describe('Categories', () => {
      it('render different groups of items', async () => {
        render(<Todo items={items}/>);

        const todoItems = screen.getAllByTestId('todo-item');
        expect(todoItems.length).toEqual(items.length);

        const completedTab = screen.getByTestId('todo-completed');
        await userEvent.click(completedTab);

        expect(screen.getAllByTestId('todo-item').length).toEqual(1);
      });

      it('switches between groups of items', async () => {
        render(<Todo items={items}/>);

        const todoItems = screen.getAllByTestId('todo-item');
        expect(todoItems.length).toEqual(items.length);

        const totalTab = screen.getByTestId('todo-total');
        await userEvent.click(totalTab);

        expect(screen.getAllByTestId('todo-item').length).toEqual(3);
      });

      it('renders active tab', async () => {
        render(<Todo items={items}/>);

        const activeTab = screen.getByTestId('todo-active');
        await userEvent.click(activeTab);

        expect(screen.getAllByTestId('todo-item').length).toEqual(2);
      });


      it('show summary information', async () => {
        render(<Todo items={items}/>);

        const todoItems = screen.getAllByTestId('todo-item');
        expect(todoItems.length).toEqual(items.length);

        const activeTab = screen.getByTestId('todo-active');
        await userEvent.click(activeTab);

        const totalTab = screen.getByTestId('todo-total');
        await userEvent.click(totalTab);

        const completedTab = screen.getByTestId('todo-completed');
        await userEvent.click(completedTab);

        expect(within(activeTab).getByText('2')).toBeInTheDocument();
        expect(within(totalTab).getByText('3')).toBeInTheDocument();
        expect(within(completedTab).getByText('1')).toBeInTheDocument();
      });
});

describe('Search', () => {
  it('search by keyword', async () => {
    render(<Todo items={items}/>);

    const searchInput = screen.getByTestId('todo-search');
    await userEvent.type(searchInput, 'buy');

    expect(screen.getByText('buy some milk')).toBeInTheDocument();
    expect(screen.queryByText('walk the dog')).not.toBeInTheDocument();
    expect(screen.queryByText('do homework')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('todo-item').length).toEqual(1);
  });
});

