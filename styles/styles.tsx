import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import AddIcon from '@mui/icons-material/Add';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
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

export { StyledStarIcon, StyledStarOutlineIcon, StyledAddIcon, StyledInfoIcon };
