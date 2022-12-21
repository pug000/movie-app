import Link from 'next/link';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHeader = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  position: 'static',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  maxWidth: 1440,
  width: '100%',
  margin: theme.spacing(0, 'auto'),
}));

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontFamily: theme.fonts.text,
  textDecoration: 'none',
  color: theme.palette.text.white,
  flexShrink: 0,
}));

export { StyledHeader, StyledToolbar, StyledLink };
