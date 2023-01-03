import { styled } from '@mui/material/styles';

type MainProps = {
  ishomepage?: boolean;
};

const StyledMain = styled('main')<MainProps>(({ theme, ishomepage }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: !ishomepage ? 'calc(100vh - 8.13rem)' : '100vh',
  minWidth: 900,
  backgroundColor: theme.palette.background.black,
  maxWidth: !ishomepage ? 1440 : 'none',
  margin: !ishomepage ? '0 auto' : 0,

  [theme.breakpoints.up('xxl')]: {
    maxWidth: 'none',
  },

  [theme.breakpoints.down('lg')]: {
    minWidth: 0,
    maxWidth: 1200,
  },
}));

export default StyledMain;
