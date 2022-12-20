import { render, screen } from '@testing-library/react';

import SearchBar from 'components/SearchBar/SearchBar';

describe('SearchBar component', () => {
  test('should render SearchBar component', () => {
    render(<SearchBar />);

    expect(screen.getByRole('textbox', { name: /search/i })).toBeInTheDocument();
  });
});
