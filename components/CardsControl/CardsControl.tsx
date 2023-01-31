import { memo } from 'react';
import type { ChangeEvent } from 'react';
import type { SelectChangeEvent } from '@mui/material/Select/Select';

import { selectItems } from 'utils/constants';

import Select from './Select/Select';

import StyledGridContainer from './CardsControl.style';
import Pagination from './Pagination/Pagination';

interface CardsControlProps {
  currentPage: number;
  totalPages: number;
  selectedValue: string;
  isLoading: boolean;
  changePage: (_event: ChangeEvent<unknown>, page: number) => void;
  changeSortType: (event: SelectChangeEvent<unknown>) => void;
}

function CardsControl({
  currentPage,
  totalPages,
  selectedValue,
  isLoading,
  changePage,
  changeSortType,
}: CardsControlProps) {
  return (
    <StyledGridContainer container>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={changePage}
        isLoading={isLoading}
      />
      <Select
        options={selectItems}
        selectedValue={selectedValue}
        isLoading={isLoading}
        changeSortType={changeSortType}
      />
    </StyledGridContainer>
  );
}

export default memo(CardsControl);
