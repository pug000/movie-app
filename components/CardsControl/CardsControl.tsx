import { useRouter } from 'next/router';
import { memo } from 'react';

import { StyledPagination, StyledGridContainer } from './CardsControl.style';

interface CardsControlProps {
  currentPage: number;
  totalPages: number;
}

function CardsControl({ currentPage, totalPages }: CardsControlProps) {
  const { pathname, query, push } = useRouter();

  return (
    <StyledGridContainer container>
      <StyledPagination
        page={currentPage}
        count={totalPages}
        shape="rounded"
        variant="outlined"
        color="primary"
        onChange={(_event, value) => push({ pathname, query: { ...query, page: value } })}
      />
    </StyledGridContainer>
  );
}

export default memo(CardsControl);
