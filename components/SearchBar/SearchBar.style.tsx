import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';

const InputWrapper = styled('div')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  position: 'relative',
  marginRight: 0,
  marginLeft: '1.5rem',
  width: 'auto',
  transition: theme.transitions.create('background-color'),

  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },

  [theme.breakpoints.down('sm')]: {
    marginRight: 0,
  },
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  paddingRight: theme.spacing(1),

  '& .MuiInputBase-input': {
    padding: '0.5rem 0.5rem 0.5rem 0',
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',

    [theme.breakpoints.up('md')]: {
      width: '35ch',
    },

    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.body2.fontSize,
    },
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export { InputWrapper, StyledInput, SearchIconWrapper };
