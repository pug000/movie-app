import { Typography } from '@mui/material';

import Header from 'components/Header/Header';
import Meta from 'components/Meta/Meta';

function Home() {
  return (
    <>
      <Meta title="Home" />
      <Header />
      <Typography variant="h1">Movie App</Typography>
    </>
  );
}

export default Home;
