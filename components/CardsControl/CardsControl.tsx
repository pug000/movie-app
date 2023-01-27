import { ChangeEvent, memo } from 'react';

import { StyledPagination, StyledGridContainer } from './CardsControl.style';

interface CardsControlProps {
  currentPage: number;
  totalPages: number;
  changePage: (_event: ChangeEvent<unknown>, page: number) => void;
}

function CardsControl({ currentPage, totalPages, changePage }: CardsControlProps) {
  return (
    <StyledGridContainer container>
      <StyledPagination
        page={currentPage}
        count={totalPages}
        shape="rounded"
        variant="outlined"
        color="primary"
        onChange={changePage}
      />
    </StyledGridContainer>
  );
}

export default memo(CardsControl);
