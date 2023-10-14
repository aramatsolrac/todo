import { render, screen } from '@testing-library/react';
import {Todo} from './Todo';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { TodoType } from './types';

describe('Todo', () => {
  const items: TodoType[] = [
    {id: '1', content: 'buy some milk', completed: false},
    {id: '2', content: 'walk the dog', completed: true},
    {id: '3', content: 'do homework', completed: false},
  ];

  it('renders the title', () => {
    render(<Todo />);

    expect(screen.getByText('Todos')).toBeInTheDocument();
  });

  it('adds item to the list', () => {
    render(<Todo items={items}/>);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    expect(screen.getByText('buy some milk')).toBeInTheDocument();  
  });

  it('completes item on click', () => {
    render(<Todo items={items}/>);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'walk the dog');
    userEvent.type(input, '{enter}');

    const item = screen.getByText('walk the dog');
    userEvent.click(item);

    expect(item).toHaveAttribute('data-completed', 'true');
  });

  it('deletes an item when the button is clicked', () => {
    render(<Todo items={items}/>);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    const item = screen.getByText('buy some milk');
    expect(item).toBeInTheDocument();

  });

  it('renders a list of items', () => {
    render(<Todo items={items}/>);
  
    expect(screen.getByText('buy some milk')).toBeInTheDocument();
    expect(screen.getByText('walk the dog')).toBeInTheDocument();
    expect(screen.getByText('do homework')).toBeInTheDocument();
  });
});
