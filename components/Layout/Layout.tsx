import React, { memo } from 'react';
import { useRouter } from 'next/router';

import Header from 'components/Header/Header';
import Meta from 'components/Meta/Meta';

import StyledMain from './Layout.style';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps) {
  const { pathname } = useRouter();
  const isHomePage = pathname === '/';
  const isNotFoundPage = pathname === '/404';

  return (
    <>
      <Meta title={title} />
      <Header isHomePage={isHomePage} isNotFoundPage={isNotFoundPage} />
      <StyledMain ishomepage={isHomePage}>{children}</StyledMain>
    </>
  );
}

export default memo(Layout);
