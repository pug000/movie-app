import { StyledHeader, StyledToolbar, StyledLink } from './Header.style';

function Header() {
  return (
    <StyledHeader>
      <StyledToolbar>
        <StyledLink href="/">Movie App</StyledLink>
      </StyledToolbar>
    </StyledHeader>
  );
}

export default Header;
