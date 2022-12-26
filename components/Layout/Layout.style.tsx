import { styled } from '@mui/material/styles';

type MainProps = {
  ishomepage?: string;
};

const StyledMain = styled('main')<MainProps>(({ theme, ishomepage }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: 900,
  backgroundColor: theme.palette.background.black,
  maxWidth: ishomepage !== 'true' ? 1440 : 'none',
  margin: ishomepage !== 'true' ? '0 auto' : 0,

  [theme.breakpoints.up('xxl')]: {
    maxWidth: 'none',
  },

  [theme.breakpoints.down('lg')]: {
    minWidth: 0,
    maxWidth: 1200,
  },
}));

export default StyledMain;
