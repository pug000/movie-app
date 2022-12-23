import SearchBar from 'components/SearchBar/SearchBar';

import {
  StyledHeader,
  StyledToolbar,
  StyledLink,
  HeaderBackground,
} from './Header.style';

function Header() {
  return (
    <StyledHeader>
      <StyledToolbar>
        <StyledLink href="/">Movie App</StyledLink>
        <SearchBar />
      </StyledToolbar>
      <HeaderBackground />
    </StyledHeader>
  );
}

export default Header;
