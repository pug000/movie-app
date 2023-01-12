import { memo } from 'react';

import SearchBar from 'components/SearchBar/SearchBar';

import { RouterPaths } from 'ts/enums';

import {
  StyledHeader,
  StyledToolbar,
  StyledLink,
  HeaderBackground,
} from './Header.style';

interface HeaderProps {
  isHomePage: boolean;
  isNotFoundPage: boolean;
}

function Header({ isHomePage, isNotFoundPage }: HeaderProps) {
  return (
    <StyledHeader ishomepage={`${isHomePage}`}>
      <StyledToolbar>
        <StyledLink href={RouterPaths.home}>Movie App</StyledLink>
        {!isNotFoundPage && <SearchBar />}
      </StyledToolbar>
      {isHomePage && <HeaderBackground />}
    </StyledHeader>
  );
}

export default memo(Header);
