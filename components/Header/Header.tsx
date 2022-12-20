import SearchBar from 'components/SearchBar/SearchBar';

import { StyledHeader, StyledToolbar, StyledLink } from './Header.style';

function Header() {
  return (
    <StyledHeader>
      <StyledToolbar>
        <StyledLink href="/">Movie App</StyledLink>
        <SearchBar />
      </StyledToolbar>
    </StyledHeader>
  );
}

export default Header;
