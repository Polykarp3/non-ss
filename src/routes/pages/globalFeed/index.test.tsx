import React from 'react';
import { render,screen } from '@testing-library/react';
import GlobalFeed from './index';

test('Global Feed',()=>{
  render(<GlobalFeed />);
  expect(screen.getByText(/Home page/i)).toBeInTheDocument();
});