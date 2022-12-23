import { styled } from '@mui/material/styles';

const StyledMain = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: 900,
  backgroundColor: theme.palette.background.black,

  [theme.breakpoints.down('md')]: {
    minWidth: 0,
    maxWidth: 900,
  },
}));

export default StyledMain;
