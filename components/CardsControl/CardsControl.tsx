import { ChangeEvent, memo } from 'react';
import { SelectChangeEvent } from '@mui/material/Select/Select';

import { selectItems } from 'utils/constants';

import Select from './Select/Select';

import { StyledPagination, StyledGridContainer } from './CardsControl.style';

interface CardsControlProps {
  currentPage: number;
  totalPages: number;
  selectedValue: string;
  changePage: (_event: ChangeEvent<unknown>, page: number) => void;
  changeSortType: (event: SelectChangeEvent<unknown>) => void;
}

function CardsControl({
  currentPage,
  totalPages,
  selectedValue,
  changePage,
  changeSortType,
}: CardsControlProps) {
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
      <Select
        options={selectItems}
        selectedValue={selectedValue}
        changeSortType={changeSortType}
      />
    </StyledGridContainer>
  );
}

export default memo(CardsControl);
