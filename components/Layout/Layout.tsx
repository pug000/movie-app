import { memo } from 'react';

import Header from 'components/Header/Header';
import Meta from 'components/Meta/Meta';

import StyledMain from './Layout.style';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Meta title={title} />
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

export default memo(Layout);
