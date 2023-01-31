import { memo } from 'react';
import Link from 'next/link';

import { getImage, loadImage } from 'utils/functions';
import { montserrat, openSans } from 'utils/fonts';

import type { Movie } from 'ts/interfaces';

import {
  StyledStarIcon,
  StyledStarOutlineIcon,
  StyledInfoIcon,
  StyledAddIcon,
} from 'styles/styles';
import {
  StyledItem,
  StyledImage,
  StyledItemInfo,
  StyledRatingWrapper,
  StyledRating,
  StyledIconButton,
  StyledLink,
  StyledButton,
  StyledImageWrapper,
} from './Card.style';

interface CardProps {
  card: Movie;
  routerPathById: string;
}

function Card({ card, routerPathById }: CardProps) {
  return (
    <StyledItem>
      <StyledImageWrapper>
        <Link href={routerPathById}>
          <StyledImage
            loader={loadImage}
            src={getImage(card.poster_path, 'w200')}
            width={0}
            height={0}
            alt={`${card.title ?? card.original_title} poster`}
          />
        </Link>
      </StyledImageWrapper>
      <StyledItemInfo>
        <StyledRatingWrapper>
          <StyledRating sx={openSans.style}>
            <StyledStarIcon />
            {card.vote_average}
          </StyledRating>
          <StyledIconButton>
            <StyledStarOutlineIcon />
          </StyledIconButton>
          <StyledIconButton>
            <StyledInfoIcon />
          </StyledIconButton>
        </StyledRatingWrapper>
        <StyledLink href={routerPathById} sx={openSans.style}>
          {card.title}
        </StyledLink>
        <StyledButton startIcon={<StyledAddIcon />} sx={montserrat.style}>
          Watchlist
        </StyledButton>
      </StyledItemInfo>
    </StyledItem>
  );
}

export default memo(Card);
