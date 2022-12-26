import Link from 'next/link';
import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

type HeaderProps = {
  ishomepage?: string;
};

const StyledHeader = styled(AppBar)<HeaderProps>(({ theme, ishomepage }) => ({
  backgroundColor:
    ishomepage === 'true'
      ? theme.palette.background.transparent
      : theme.palette.background.black,
  boxShadow: 'none',
  position: ishomepage !== 'true' ? 'sticky' : 'fixed',
  marginBottom: '3.13rem',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'space-between',
  minWidth: 900,
  maxWidth: '100%',
  width: '100%',
  margin: theme.spacing(0, 'auto'),

  [theme.breakpoints.up('sm')]: {
    minHeight: '5rem',
    paddingLeft: '3.5rem',
    paddingRight: '3.5rem',
  },

  [theme.breakpoints.down('lg')]: {
    minWidth: 0,
    maxWidth: 1200,
  },

  [theme.breakpoints.between('xs', 'md')]: {
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
  },
}));

const StyledLink = styled(Link)(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  textDecoration: 'none',
  color: theme.palette.text.white,
  flexShrink: 0,

  [theme.breakpoints.down('sm')]: {
    fontSize: theme.typography.h4.fontSize,
  },
}));

const HeaderBackground = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  width: '100%',
  pointerEvents: 'none',
  opacity: 1,
  height: '16rem',
  zIndex: -1,
  background:
    'linear-gradient(180deg,rgba(0,0,0,.6),rgba(0,0,0,.595) 6.67%,rgba(0,0,0,.579) 13.33%,rgba(0,0,0,.551) 20%,rgba(0,0,0,.512) 26.67%,rgba(0,0,0,.461) 33.33%,rgba(0,0,0,.401) 40%,rgba(0,0,0,.334) 46.67%,rgba(0,0,0,.266) 53.33%,rgba(0,0,0,.199) 60%,rgba(0,0,0,.139) 66.67%,rgba(0,0,0,.088) 73.33%,rgba(0,0,0,.049) 80%,rgba(0,0,0,.021) 86.67%,rgba(0,0,0,.005) 93.33%,transparent)',

  '&::before': {
    content: '""',
    left: 0,
    right: 0,
    display: 'flex',
    height: '20rem',
    opacity: 0,
    background:
      'linear-gradient(180deg,rgba(0,0,0,.95),rgba(0,0,0,.934) 14.24%,rgba(0,0,0,.902) 25.77%,rgba(0,0,0,.857) 34.98%,rgba(0,0,0,.799) 42.23%,rgba(0,0,0,.733) 47.9%,rgba(0,0,0,.658) 52.37%,rgba(0,0,0,.579) 56%,rgba(0,0,0,.496) 59.18%,rgba(0,0,0,.412) 62.27%,rgba(0,0,0,.329) 65.65%,rgba(0,0,0,.249) 69.69%,rgba(0,0,0,.173) 74.78%,rgba(0,0,0,.106) 81.27%,rgba(0,0,0,.047) 89.56%,transparent)',
  },

  [theme.breakpoints.down('lg')]: {
    height: '12rem',
  },
}));

export { StyledHeader, StyledToolbar, StyledLink, HeaderBackground };
