import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import App from './App';

vi.mock('@/pages/home', () => ({
  default: () => <div>Home Page</div>,
}));

vi.mock('@/pages/noMatch', () => ({
  default: () => <div>Page not Found!</div>,
}));

describe('App', () => {
  it('renders the Home page at the root route', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
    });
  });

  it('renders the NoMatch page for an unknown route', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/unknown']}>
          <App />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText(/Page not Found!/)).toBeInTheDocument();
  });
});
