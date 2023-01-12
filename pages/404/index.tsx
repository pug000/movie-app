import Link from 'next/link';

import Layout from 'components/Layout/Layout';

import { RouterPaths } from 'ts/enums';

import { StyledButton, StyledSection, Title } from './NotFound.style';

function NotFound() {
  return (
    <Layout title="NotFound">
      <StyledSection>
        <Title>Something went wrong!</Title>
        <StyledButton
          variant="contained"
          size="medium"
          LinkComponent={Link}
          href={RouterPaths.home}
        >
          Return to Home page
        </StyledButton>
      </StyledSection>
    </Layout>
  );
}

export default NotFound;
