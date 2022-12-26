import { memo } from 'react';

import SearchBar from 'components/SearchBar/SearchBar';

import {
  StyledHeader,
  StyledToolbar,
  StyledLink,
  HeaderBackground,
} from './Header.style';

interface HeaderProps {
  isHomePage: boolean;
}

function Header({ isHomePage }: HeaderProps) {
  return (
    <StyledHeader ishomepage={`${isHomePage}`}>
      <StyledToolbar>
        <StyledLink href="/">Movie App</StyledLink>
        <SearchBar />
      </StyledToolbar>
      {isHomePage && <HeaderBackground />}
    </StyledHeader>
  );
}

export default memo(Header);
