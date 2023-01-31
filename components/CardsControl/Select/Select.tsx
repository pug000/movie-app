import { memo } from 'react';
import type { SelectChangeEvent } from '@mui/material';

import type { SelectOption } from 'ts/interfaces';
import { openSans } from 'utils/fonts';

import { StyledFormControl, StyledSelect, SelectItem, menuProps } from './Select.style';

interface SelectProps {
  options: SelectOption[];
  selectedValue: string;
  isLoading: boolean;
  changeSortType: (event: SelectChangeEvent<unknown>) => void;
}

function Select({ options, selectedValue, isLoading, changeSortType }: SelectProps) {
  return (
    <StyledFormControl size="small">
      <StyledSelect
        value={selectedValue}
        variant="outlined"
        MenuProps={menuProps}
        sx={openSans.style}
        disabled={isLoading}
        onChange={changeSortType}
      >
        {options.map(({ text, value }) => (
          <SelectItem key={value} value={value} sx={openSans.style}>
            {text}
          </SelectItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
}

export default memo(Select);
