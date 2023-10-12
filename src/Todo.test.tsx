import React from 'react';
import { render, screen } from '@testing-library/react';
import {Todo} from './Todo';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

describe('Todo', () => {
  it('renders the title', () => {
    render(<Todo />);

    expect(screen.getByText('Todos')).toBeInTheDocument();
  });

  it('adds item to the list', () => {
    render(<Todo />);

    const input = screen.getByTestId('todo-input');
    userEvent.type(input, 'buy some milk');
    userEvent.type(input, '{enter}');

    expect(screen.getByText('buy some milk')).toBeInTheDocument();  
  });
});
