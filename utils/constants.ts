import { SwiperOptions } from 'swiper';

const imageUrl = 'https://image.tmdb.org/t/p/';

const swiperBreakpoints: SwiperOptions['breakpoints'] = {
  0: {
    slidesPerView: 1,
  },
  630: {
    slidesPerView: 2,
  },
  850: {
    slidesPerView: 3,
  },
  1120: {
    slidesPerView: 4,
  },
  1320: {
    slidesPerView: 5,
  },
  1900: {
    slidesPerView: 6,
  },
};

export { imageUrl, swiperBreakpoints };
