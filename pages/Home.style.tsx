import { Button, Stack, styled, Typography, Container } from '@mui/material';
import Image from 'next/image';

const StyledPosterSection = styled('section')({
  minHeight: '100vh',
});

const StyledWrapper = styled('div')({
  position: 'relative',
  overflow: 'hidden',
  height: 'auto',
  minHeight: '100vh',
  display: 'flex',
});

const StyledContainer = styled('div')({
  position: 'absolute',
  top: '-17rem',
  left: '-34rem',
  transform: 'rotate(10deg)',
});

const StyledStack = styled(Stack)({
  marginBottom: '0.625rem',

  '&:nth-child(odd)': {
    transform: 'translate3d(calc(20.75rem / 2), 0, 0)',
  },
});

const ImageWrapper = styled('div')({
  display: 'flex',
  marginRight: '0.625rem',
});

const StyledImage = styled(Image)({
  width: '20.75rem',
  height: '27.5rem',
});

const PosterBackground = styled('div')({
  '&::before': {
    background:
      'radial-gradient(100% 99.96% at 100% 99.96%,rgba(0,0,0,.4) 0,rgba(0,0,0,.4) 100%)',
    transform: 'matrix(1,0,0,-1,0,0)',
  },

  '&::after': {
    background:
      'radial-gradient(100% 99.96% at 100% 99.96%,rgba(0,0,0,.4) 0,rgba(0,0,0,.2) 100%)',
    transform: 'rotate(-180deg)',
  },

  '&::before, &::after': {
    content: '""',
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'calc(100% + 20.75rem)',
    height: 'calc(100% + 10.38rem)',
  },
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.white,
  textAlign: 'center',
}));

const StyledTitleContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 10,
  gap: '2.5rem',
});

const StyledButton = styled(Button)({
  borderRadius: '1.5rem',
  padding: '0.5rem 4.5rem',
});

export {
  StyledPosterSection,
  StyledWrapper,
  StyledStack,
  ImageWrapper,
  StyledImage,
  StyledContainer,
  PosterBackground,
  Title,
  StyledTitleContainer,
  StyledButton,
};
