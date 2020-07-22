import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Button is rendered', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/btn-rendered/i);
});