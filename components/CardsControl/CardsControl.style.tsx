import { Grid, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledGridContainer = styled(Grid)({
  justifyContent: 'center',
});

const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPaginationItem-root': {
    color: theme.palette.background.white,
  },

  '& Button': {
    border: '1px solid rgba(255, 255, 255, 0.23)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

export { StyledGridContainer, StyledPagination };
