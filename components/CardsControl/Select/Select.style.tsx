import { FormControl, Select, MenuItem } from '@mui/material';
import { MenuProps } from '@mui/material/Menu/Menu';
import { styled } from '@mui/material/styles';

import defaultTheme from 'styles/theme';

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '&& .Mui-selected': {
    backgroundColor: theme.palette.background.black,
  },
}));

const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.text.white,
  fontSize: theme.typography.body2.fontSize,
  minWidth: '12.5rem',
  borderRadius: '0.25rem',

  '.MuiSelect-select': {
    padding: '0.53rem 0.88rem',
    borderRadius: '0.25rem',
    paddingRight: '2rem !important',
  },

  '&.Mui-disabled .MuiSelect-select': {
    WebkitTextFillColor: theme.palette.text.white,
    opacity: 0.34,
    borderRadius: '0.25rem',
  },

  '.MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.23)',
  },

  '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.23)',
  },

  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },

  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(255, 255, 255, 0.4)',
  },

  '.MuiSvgIcon-root ': {
    fill: theme.palette.background.white,
  },
}));

const SelectItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.white,
  fontSize: theme.typography.body2.fontSize,
}));

const menuProps: Partial<MenuProps> = {
  sx: {
    '.MuiPaper-root': {
      backgroundColor: defaultTheme.palette.background.black,
      borderRadius: '0.25rem',
    },

    '.MuiMenu-list': {
      padding: '0.5rem 0',
    },

    '.MuiMenuItem-root': {
      backgroundColor: 'transparent',
      padding: '0.37rem 1rem',

      '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
    },

    '.Mui-selected': {
      color: defaultTheme.palette.primary.main,
      backgroundColor: 'rgba(25, 118, 210, 0.12) !important',

      '&:hover': {
        backgroundColor: 'rgba(25, 118, 210, 0.24) !important',
      },
    },
  },
};

export { StyledFormControl, StyledSelect, SelectItem, menuProps };
