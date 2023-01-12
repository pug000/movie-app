import { styled } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';

const StyledSection = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '25vh',
  gap: '2.5rem',
  alignItems: 'center',
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  fontSize: theme.typography.h1.fontSize,
  textAlign: 'center',
  padding: '0 1.5rem 0 1.5rem',

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h3.fontSize,
    padding: '0 0.5rem 0 0.5rem',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '1.5rem',
  padding: '0.5rem',
  maxWidth: '16rem',
  width: '100%',

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.body2.fontSize,
  },
}));

export { StyledSection, Title, StyledButton };
