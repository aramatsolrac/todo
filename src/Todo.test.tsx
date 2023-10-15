import { render, screen, within } from '@testing-library/react';
import { TodoType } from './types';
import { Todo } from './Todo';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

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

  it('deletes an item when the button is clicked', async () => {
    render(<Todo />);

    const input = screen.getByTestId('todo-input');
    await userEvent.type(input, 'buy some milk');
    await userEvent.type(input, '{enter}');

    const item = screen.getByText('buy some milk');

    expect(item).toBeInTheDocument();
  });

  it('renders a list of items', () => {
    render(<Todo items={items}/>);

    expect(screen.getByText('buy some milk')).toBeInTheDocument();
    expect(screen.getByText('walk the dog')).toBeInTheDocument();
    expect(screen.getByText('do homework')).toBeInTheDocument();
  });

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
