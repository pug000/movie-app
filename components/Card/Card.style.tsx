import { Button, IconButton, Skeleton, styled } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const StyledItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.3rem',
  backgroundColor: theme.palette.background.dark,
  width: '12.5rem',
  margin: '0 auto',
  borderRadius: '0 0 0.25rem 0.25rem',
}));

const StyledImageWrapper = styled('div')({
  height: '18.75rem',
});

const StyledImage = styled(Image)(({ theme }) => ({
  width: '12.5rem',
  height: '18.75rem',
  transition: theme.transitions.create('opacity'),

  '&:hover': {
    opacity: 0.6,
  },
}));

const StyledItemInfo = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.5rem',
  padding: '0 0.5rem 1rem 0.5rem',

  '& a': {
    fontSize: theme.typography.body2.fontSize,
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.transparent,

  '&:hover': {
    backgroundColor: 'hsla(0,0%,100%,.15)',

    '& svg': {
      color: theme.palette.background.white,
    },
  },
}));

const StyledRatingWrapper = styled('div')({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-around',
});

const StyledRating = styled('span')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  gap: '0.3rem',
  color: theme.palette.text.white,
  maxWidth: '3.3rem',
  width: '100%',
}));

interface WidthProps {
  width?: string;
}

const StyledLink = styled(Link)<WidthProps>(({ theme, width }) => ({
  color: theme.palette.text.white,
  textDecoration: 'none',
  transition: theme.transitions.create(['opacity', 'color']),
  textOverflow: 'ellipsis',
  height: '3rem',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  width: width ?? 'initial',

  '&:hover': {
    opacity: 0.6,
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'hsla(0,0%,100%,.08)',
  color: theme.palette.primary.main,
  fontWeight: theme.typography.h1.fontWeight,
  padding: '0 0.75rem',
  borderRadius: '0.25rem',
  lineHeight: '1.75rem',
  fontSize: theme.typography.body2.fontSize,
  textTransform: 'none',
  alignSelf: 'center',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '100%',
  minWidth: '3rem',
  minHeight: '2.25rem',

  '&:hover': {
    backgroundColor: 'hsla(0,0%,100%,.15)',
  },

  '& .MuiButton-startIcon': {
    marginRight: '0.5rem',
    marginLeft: '-0.25rem',
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  width: '2.5rem',
  height: '2.5rem',

  '&.swiper-button-disabled': {
    cursor: 'auto',
    pointerEvents: 'none',

    '& svg': {
      color: theme.palette.background.grey,
    },
  },
}));

const StyledSkeleton = styled(Skeleton)(({ theme, width, height }) => ({
  backgroundColor: theme.palette.grey[800],
  width: width ?? '1.3rem',
  height: height ?? '1.3rem',
}));

export {
  StyledItem,
  StyledImageWrapper,
  StyledImage,
  StyledItemInfo,
  StyledIconButton,
  StyledRatingWrapper,
  StyledRating,
  StyledLink,
  StyledButton,
  StyledSkeleton,
  NavigationButton,
};
