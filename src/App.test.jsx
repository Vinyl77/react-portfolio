import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { AppRoutes } from './App';

describe('App', () => {
  it('renders the hero title on the home route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRoutes />
      </MemoryRouter>,
    );
    const title = screen.getByRole('heading', { name: /richard yvarra/i });
    expect(title).toBeInTheDocument();
  });
});
