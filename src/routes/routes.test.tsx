import React from 'react';
import { createMemoryHistory } from 'history';
import Routes from './routes';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';

describe('Routes', () => {
  it('page index', () => {
    const history=createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <Routes/>
      </Router>
    );
    expect(screen.getByTestId('home-page')).toBeInTheDocument();
  });
});