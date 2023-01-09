import { memo, useRef } from 'react';
import Swiper, { Navigation } from 'swiper';

import { Movie, SortType } from 'ts/interfaces';

import { swiperBreakpoints } from 'utils/constants';

import Card from 'components/Card/Card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/virtual';
import { NavigationNextIcon, NavigationPrevIcon } from 'styles/styles';
import {
  StyledSection,
  StyledTitle,
  StyledSwiper,
  StyledSwiperSlide,
  StyledLink,
  StyledSectionHeader,
  NavigationButton,
  StyledBox,
} from './Slider.style';

interface SliderProps {
  initialData: Movie[];
  routerPath: string;
  sliderTitle?: string;
  sortBy: SortType;
}

function Slider({ initialData, routerPath, sliderTitle, sortBy }: SliderProps) {
  const navigationPrevRef = useRef<HTMLButtonElement | null>(null);
  const navigationNextRef = useRef<HTMLButtonElement | null>(null);

  const onBeforeInit: (swiper: Swiper) => void = ({ params, ...swiper }) => {
    if (
      typeof params.navigation !== 'boolean' &&
      typeof params.navigation !== 'undefined'
    ) {
      const { navigation } = params;
      navigation.prevEl = navigationPrevRef.current;
      navigation.nextEl = navigationNextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  };

  return (
    <StyledSection>
      <StyledSectionHeader>
        <StyledTitle variant="h2">{sliderTitle}</StyledTitle>
        <StyledLink
          href={{ pathname: routerPath, query: { page: 1, sortBy: sortBy.type } }}
          // onClick={() => setSortTypeOnClick(sortBy)}
        >
          View all
        </StyledLink>
      </StyledSectionHeader>
      <StyledBox>
        <NavigationButton ref={navigationPrevRef}>
          <NavigationPrevIcon />
        </NavigationButton>
        <StyledSwiper
          allowTouchMove
          modules={[Navigation]}
          slidesPerView={5}
          breakpoints={swiperBreakpoints}
          onBeforeInit={onBeforeInit}
        >
          {initialData.slice(0, 10).map((card) => (
            <StyledSwiperSlide key={card.id}>
              <Card card={card} routerPathById={`${routerPath}/${card.id}`} />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <NavigationButton ref={navigationNextRef}>
          <NavigationNextIcon />
        </NavigationButton>
      </StyledBox>
    </StyledSection>
  );
}

Slider.defaultProps = {
  sliderTitle: '',
};

export default memo(Slider);
