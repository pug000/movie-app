import { Grid, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import { openSans } from 'utils/fonts';

const StyledGridContainer = styled(Grid)({
  justifyContent: 'center',
  padding: '0 1rem',
  gap: '2.5rem 9rem',
});

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    color: theme.palette.background.white,
  },

  '& .MuiPagination-ul': {
    gap: '0.38rem 0',
  },

  '& Button': {
    border: '0.06rem solid rgba(255, 255, 255, 0.23)',
    minWidth: '2.5rem',
    height: '2.5rem',
    borderRadius: '0.25rem',
    margin: '0 0.19rem',
    padding: '0 0.38rem',
    ...openSans.style,

    '& .Mui-selected': {
      color: theme.palette.text.primary,
    },

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

export { StyledGridContainer, StyledPagination };
