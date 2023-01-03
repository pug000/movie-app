import { styled, Typography } from '@mui/material';

const StyledSection = styled('section')({
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
});

const StyledTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.background.white,
  alignSelf: 'center',
}));

export { StyledSection, StyledTitle };
