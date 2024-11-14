import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders the MainRoute component', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Verify that the MainRoute component is rendered by checking its test ID
    expect(screen.getByTestId('main-route-config')).toBeInTheDocument();
  });
});
