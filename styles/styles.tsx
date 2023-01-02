import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/material';

const StyledStarIcon = styled(StarIcon)(({ theme }) => ({
  color: theme.palette.background.orange,
  width: '1.3rem',
  height: '1.3rem',
}));

const StyledStarOutlineIcon = styled(StarOutlineIcon)(({ theme }) => ({
  color: theme.palette.primary.main,
  width: '1.3rem',
  height: '1.3rem',
  transition: theme.transitions.create('color'),
}));

const StyledAddIcon = styled(AddIcon)({
  width: '1.25rem',
  height: '1.25rem',
});

const StyledInfoIcon = styled(InfoOutlinedIcon)(({ theme }) => ({
  color: theme.palette.background.white,
  width: '1.25rem',
  height: '1.25rem',
  transition: theme.transitions.create('color'),
}));

const NavigationPrevIcon = styled(ArrowBackIosNewIcon)(({ theme }) => ({
  color: theme.palette.background.white,
  transition: theme.transitions.create('opacity'),

  '&:hover': {
    opacity: 0.6,
  },
}));

const NavigationNextIcon = styled(ArrowForwardIosIcon)(({ theme }) => ({
  color: theme.palette.background.white,
  transition: theme.transitions.create('opacity'),

  '&:hover': {
    opacity: 0.6,
  },
}));

export {
  StyledStarIcon,
  StyledStarOutlineIcon,
  StyledAddIcon,
  StyledInfoIcon,
  NavigationPrevIcon,
  NavigationNextIcon,
};
