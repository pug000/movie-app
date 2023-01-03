import { SwiperOptions } from 'swiper';
import { Endpoints } from 'ts/enums';
import { SortType } from 'ts/interfaces';

const nextWeekReleaseDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, -14);

const minReleaseDate = new Date(new Date().setFullYear(new Date().getFullYear() - 40))
  .toISOString()
  .slice(0, -14);

const maxReleaseDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2))
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
    releaseDate: nextWeekReleaseDate,
  },
  {
    type: 'vote_count.desc',
    releaseDate: nextWeekReleaseDate,
  },
  {
    type: 'popularity.desc',
    releaseDate: nextWeekReleaseDate,
  },
  {
    type: 'primary_release_date.desc',
    releaseDate: maxReleaseDate,
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
