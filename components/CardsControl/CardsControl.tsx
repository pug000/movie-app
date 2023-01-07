import { ChangeEvent, memo } from 'react';
import { StyledPagination, StyledGridContainer } from './CardsControl.style';

interface CardsControlProps {
  currentPage: number;
  totalPages?: number;
  changePaginationPageOnClick: (event: ChangeEvent<unknown>, value: number) => void;
}

function CardsControl({
  currentPage,
  totalPages,
  changePaginationPageOnClick,
}: CardsControlProps) {
  return (
    <StyledGridContainer container>
      <StyledPagination
        page={currentPage}
        count={totalPages && totalPages < 50 ? totalPages : 50}
        shape="rounded"
        variant="outlined"
        color="primary"
        onChange={changePaginationPageOnClick}
      />
    </StyledGridContainer>
  );
}

CardsControl.defaultProps = {
  totalPages: 1,
};

export default memo(CardsControl);
