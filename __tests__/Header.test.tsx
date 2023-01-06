import { render, screen } from '@testing-library/react';

import Header from 'components/Header/Header';

describe('Header component', () => {
  test('should render Header component', () => {
    render(<Header isHomePage={false} />);

    expect(screen.getByRole('link', { name: /movie app/i })).toBeInTheDocument();
  });
});
