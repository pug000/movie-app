import { Pagination, styled } from '@mui/material';

import { openSans } from 'utils/fonts';

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
      color: theme.palette.primary.main,
    },

    '&.Mui-disabled.Mui-selected': {
      backgroundColor: 'rgba(25, 118, 210, 0.12)',
      border: '0.06rem solid rgba(25, 118, 210, 0.5)',
      color: theme.palette.primary.main,
      opacity: 0.7,
    },

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
}));

export default StyledPagination;
