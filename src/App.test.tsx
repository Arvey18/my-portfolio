import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Mock MainRoute component
vi.mock('@/configs/main-route', () => {
  return {
    __esModule: true,
    default: () => <div data-testid="main-route-config">Mock MainRoute</div>,
  };
});

describe('App Component', () => {
  it('renders the App component with the mocked MainRoute', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Assert that the app-container is in the document
    expect(screen.getByTestId('app-container')).toBeInTheDocument();

    // Assert that the mock version of MainRoute is rendered
    expect(screen.getByTestId('main-route-config')).toBeInTheDocument();
  });
});
