import { Toolbar } from '@mui/material';

import { StyledHeader, StyledLink } from './Header.style';

function Header() {
  return (
    <StyledHeader>
      <Toolbar>
        <StyledLink href="/">Movie App</StyledLink>
      </Toolbar>
    </StyledHeader>
  );
}

export default Header;
