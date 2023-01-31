import { memo } from 'react';
import type { ChangeEvent } from 'react';

import StyledPagination from './Pagination.style';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  changePage: (_event: ChangeEvent<unknown>, page: number) => void;
}

function Pagination({ currentPage, totalPages, isLoading, changePage }: PaginationProps) {
  return (
    <StyledPagination
      page={currentPage}
      count={totalPages}
      shape="rounded"
      variant="outlined"
      color="primary"
      disabled={isLoading}
      onChange={changePage}
    />
  );
}

export default memo(Pagination);
