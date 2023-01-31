import { memo } from 'react';
import { Grid } from '@mui/material';

import Card from 'components/Card/Card';

import type { Movie } from 'ts/interfaces';

import StyledGridContainer from './CardsList.style';

interface ItemListProps {
  itemList: Movie[];
  routerPath: string;
  isLoading: boolean;
}

function CardsList({ itemList, routerPath, isLoading }: ItemListProps) {
  return (
    <StyledGridContainer container>
      {itemList &&
        itemList.map((card) => (
          <Grid key={card.id} item m={3.5}>
            <Card
              card={card}
              routerPathById={`${routerPath}${card.id}`}
              isLoading={isLoading}
            />
          </Grid>
        ))}
    </StyledGridContainer>
  );
}

export default memo(CardsList);
