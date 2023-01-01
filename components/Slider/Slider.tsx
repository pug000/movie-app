import { memo } from 'react';
import { Navigation, Virtual } from 'swiper';
import Link from 'next/link';

import { Movie, SortType } from 'ts/interfaces';

import { imageUrl, swiperBreakpoints } from 'utils/constants';
import { loadImage } from 'utils/functions';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import {
  StyledAddIcon,
  StyledInfoIcon,
  StyledStarIcon,
  StyledStarOutlineIcon,
} from 'styles/styles';
import {
  StyledImage,
  StyledItem,
  StyledSection,
  StyledIconButton,
  StyledTitle,
  StyledSwiper,
  StyledSwiperSlide,
  StyledRatingWrapper,
  StyledRating,
  StyledLink,
  StyledItemInfo,
  StyledButton,
  StyledSectionHeader,
} from './Slider.style';

interface SliderProps {
  initialData: Movie[];
  routerPath: string;
  sliderTitle?: string;
  sortBy: SortType;
  setSortTypeOnClick: (sortType: SortType) => void;
}

function Slider({
  initialData,
  routerPath,
  sliderTitle,
  sortBy,
  setSortTypeOnClick,
}: SliderProps) {
  return (
    <StyledSection>
      <StyledSectionHeader>
        <StyledTitle variant="h2">{sliderTitle}</StyledTitle>
        <StyledLink href={routerPath} onClick={() => setSortTypeOnClick(sortBy)}>
          View all
        </StyledLink>
      </StyledSectionHeader>
      <StyledSwiper
        allowTouchMove
        modules={[Navigation, Virtual]}
        slidesPerView={5}
        breakpoints={swiperBreakpoints}
        navigation
      >
        {initialData
          .slice(10)
          .map(
            (
              { id, title, original_title, poster_path, backdrop_path, vote_average },
              index
            ) => (
              <StyledSwiperSlide key={id} virtualIndex={index}>
                <StyledItem>
                  <Link href={`${routerPath}/${id}`}>
                    <StyledImage
                      loader={loadImage}
                      src={`${imageUrl}w200/${poster_path ?? backdrop_path}`}
                      width={0}
                      height={0}
                      priority
                      alt={title ?? original_title}
                    />
                  </Link>
                  <StyledItemInfo>
                    <StyledRatingWrapper>
                      <StyledRating>
                        <StyledStarIcon />
                        {vote_average}
                      </StyledRating>
                      <StyledIconButton>
                        <StyledStarOutlineIcon />
                      </StyledIconButton>
                      <StyledIconButton>
                        <StyledInfoIcon />
                      </StyledIconButton>
                    </StyledRatingWrapper>
                    <StyledLink href={`${routerPath}/${id}`}>{title}</StyledLink>
                    <StyledButton startIcon={<StyledAddIcon />}>Watchlist</StyledButton>
                  </StyledItemInfo>
                </StyledItem>
              </StyledSwiperSlide>
            )
          )}
      </StyledSwiper>
    </StyledSection>
  );
}

Slider.defaultProps = {
  sliderTitle: '',
};

export default memo(Slider);
