import Link from 'next/link';
import { montserrat, openSans } from 'utils/fonts';

import Layout from 'components/Layout/Layout';

import { RouterPaths } from 'ts/enums';

import { StyledButton, StyledSection, Title } from './NotFound.style';

function NotFound() {
  return (
    <Layout title="NotFound">
      <StyledSection>
        <Title variant="h1" sx={montserrat.style}>
          Something went wrong!
        </Title>
        <StyledButton
          variant="contained"
          size="medium"
          LinkComponent={Link}
          href={RouterPaths.home}
          sx={openSans.style}
        >
          Return to Home page
        </StyledButton>
      </StyledSection>
    </Layout>
  );
}

export default NotFound;
