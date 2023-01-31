import { memo } from 'react';
import Link from 'next/link';

import {
  StyledButton,
  StyledIconButton,
  StyledImageWrapper,
  StyledItem,
  StyledItemInfo,
  StyledLink,
  StyledRating,
  StyledRatingWrapper,
  StyledSkeleton,
} from './Card.style';

interface CardSkeletonProps {
  routerPathById: string;
}

function CardSkeleton({ routerPathById }: CardSkeletonProps) {
  return (
    <StyledItem>
      <StyledImageWrapper>
        <Link href={routerPathById}>
          <StyledSkeleton variant="rectangular" width="100%" height="18.75rem" />
        </Link>
      </StyledImageWrapper>
      <StyledItemInfo>
        <StyledRatingWrapper>
          <StyledRating>
            <StyledSkeleton variant="rounded" />
            <StyledSkeleton variant="rounded" width="1.65rem" />
          </StyledRating>
          <StyledIconButton>
            <StyledSkeleton variant="circular" />
          </StyledIconButton>
          <StyledIconButton>
            <StyledSkeleton variant="circular" />
          </StyledIconButton>
        </StyledRatingWrapper>
        <StyledLink href={routerPathById} width="100%">
          <StyledSkeleton variant="text" width="100%" height="1.1rem" />
          <StyledSkeleton variant="text" width="80%" height="1.1rem" />
        </StyledLink>
        <StyledButton
          startIcon={
            <StyledSkeleton variant="rounded" width="1.25rem" height="1.25rem" />
          }
        >
          <StyledSkeleton variant="text" width="5.1rem" height="2rem" />
        </StyledButton>
      </StyledItemInfo>
    </StyledItem>
  );
}

export default memo(CardSkeleton);
