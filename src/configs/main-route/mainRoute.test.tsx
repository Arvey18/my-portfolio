import { render, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import MainRoute from '.';

vi.mock('@/pages/home', () => ({
  default: () => <div>Home Page</div>,
}));

vi.mock('@/pages/no-match', () => ({
  default: () => <div>Page not Found!</div>,
}));

describe('Main Route', () => {
  it('renders the Home page at the root route', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <MainRoute />
        </MemoryRouter>
      );
    });
  });

  it('renders the NoMatch page for an unknown route', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/unknown']}>
          <MainRoute />
        </MemoryRouter>
      );
    });

    expect(await screen.findByText(/Page not Found!/)).toBeInTheDocument();
  });
});
