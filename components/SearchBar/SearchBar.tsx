import { openSans } from 'utils/fonts';

import SearchIcon from '@mui/icons-material/Search';

import { InputWrapper, SearchIconWrapper, StyledInput } from './SearchBar.style';

function SearchBar() {
  return (
    <InputWrapper>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInput
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        sx={openSans.style}
      />
    </InputWrapper>
  );
}

export default SearchBar;
