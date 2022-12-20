import { Typography } from '@mui/material';
import Header from 'components/Header/Header';
import HeadTitle from 'components/HeadTitle/HeadTitle';

function Home() {
  return (
    <>
      <HeadTitle title="Home" />
      <Header />
      <Typography variant="h1">Movie App</Typography>
    </>
  );
}

export default Home;
