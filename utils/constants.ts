import { SwiperOptions } from 'swiper';
import { Endpoints } from 'ts/enums';
import { SortType } from 'ts/interfaces';

const nextWeekReleaseDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, -14);

const minReleaseDate = new Date(new Date().setFullYear(new Date().getFullYear() - 100))
  .toISOString()
  .slice(0, -14);

const maxReleaseDate = new Date(new Date().setFullYear(new Date().getFullYear() + 3))
  .toISOString()
  .slice(0, -14);

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

const titles = ['Latest movies', 'Top rated movies', 'Popular movies', 'Upcoming movies'];
const endpoints = [
  `${Endpoints.latest}`,
  `${Endpoints.topRated}`,
  `${Endpoints.popular}`,
  `${Endpoints.upcoming}`,
];
const sorts: SortType[] = [
  {
    type: 'primary_release_date.desc',
    maxReleaseDate: nextWeekReleaseDate,
  },
  {
    type: 'vote_count.desc',
    maxReleaseDate: nextWeekReleaseDate,
  },
  {
    type: 'popularity.desc',
    maxReleaseDate: nextWeekReleaseDate,
  },
  {
    type: 'primary_release_date.desc',
    maxReleaseDate,
  },
];

export {
  imageUrl,
  swiperBreakpoints,
  nextWeekReleaseDate,
  minReleaseDate,
  maxReleaseDate,
  titles,
  endpoints,
  sorts,
};
