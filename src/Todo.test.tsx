import React from 'react';
import { render, screen } from '@testing-library/react';
import {Todo} from './Todo';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import exp from 'constants';

describe('Todo', () => {
  it('renders the title', () => {
    render(<Todo />);

    expect(screen.getByText('Todos')).toBeInTheDocument();
  });

  it.skip('adds item to the list', () => {
    render(<Todo />);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    expect(screen.getByText('buy some milk')).toBeInTheDocument();  
  });

  it.skip('completes item on click', () => {
    render(<Todo />);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    const item = screen.getByText('buy some milk');
    userEvent.click(item);

    expect(item).toHaveStyle('text-decoration: line-through');
    expect(item).toHaveAttribute('data-completed', 'true');

  });

  it('deletes an item when the button is clicked', () => {
    render(<Todo />);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    const item = screen.getByText('buy some milk');
    expect(item).toBeInTheDocument();

    const deleteButton = screen.getByTestId('delete-button');
    userEvent.click(deleteButton);
    expect(item).not.toBeInTheDocument();
  });

  // it('adds multiple items to the list', () => {
  //   render(<Todo />);

  //   const input = screen.getByTestId('todo-input');
  //   userEvent.type(input, 'buy some milk');
  //   userEvent.type(input, '{enter}');
  //   userEvent.type(input, 'walk the dog');
  //   userEvent.type(input, '{enter}');

  //   expect(screen.getByText('buy some milk')).toBeInTheDocument();  
  //   expect(screen.getByText('walk the dog')).toBeInTheDocument();  
  // });

  // it('clears input after adding item to the list', () => {
  //   render(<Todo />);

  //   const input = screen.getByTestId('todo-input');
  //   userEvent.type(input, 'buy some milk');
  //   userEvent.type(input, '{enter}');

  //   expect(input).toHaveValue('');  
  // });

  // it('does not add empty item to the list', () => {
  //   render(<Todo />);

  //   const input = screen.getByTestId('todo-input');
  //   userEvent.type(input, '{enter}');

  //   expect(screen.queryByText('')).not.toBeInTheDocument();  
  // });

});
