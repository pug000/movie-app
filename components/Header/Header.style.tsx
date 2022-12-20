import Link from 'next/link';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: 'static',
}));

const StyledToolbar = styled(Toolbar)({
  justifyContent: 'space-between',
});

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  textDecoration: 'none',
  color: theme.palette.text.white,
  flexShrink: 0,
}));

export { StyledHeader, StyledToolbar, StyledLink };
