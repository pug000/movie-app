import { memo } from 'react';
import { useRouter } from 'next/router';

import SearchBar from 'components/SearchBar/SearchBar';

import {
  StyledHeader,
  StyledToolbar,
  StyledLink,
  HeaderBackground,
} from './Header.style';

function Header() {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';

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
