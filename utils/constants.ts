import { SwiperOptions } from 'swiper';
import { Endpoints } from 'ts/enums';
import { SelectOption, SortType } from 'ts/interfaces';

const todayDate = new Date().toISOString().slice(0, -14);

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
    releaseDate: todayDate,
  },
  {
    type: 'vote_count.desc',
    releaseDate: todayDate,
  },
  {
    type: 'popularity.desc',
    releaseDate: todayDate,
  },
  {
    type: 'primary_release_date.desc',
    releaseDate: maxReleaseDate,
  },
  {
    type: 'primary_release_date.asc',
    releaseDate: todayDate,
  },
  {
    type: 'vote_count.asc',
    releaseDate: todayDate,
  },
  {
    type: 'popularity.asc',
    releaseDate: todayDate,
  },
];

const selectItems: SelectOption[] = [
  {
    value: 'primary_release_date.desc',
    text: 'Release date 🠗',
  },
  {
    value: 'primary_release_date.asc',
    text: 'Release date 🠕',
  },
  {
    value: 'popularity.desc',
    text: 'Popularity 🠗',
  },
  {
    value: 'popularity.asc',
    text: 'Popularity 🠕',
  },
  {
    value: 'vote_count.desc',
    text: 'User vote 🠗',
  },
  {
    value: 'vote_count.asc',
    text: 'User vote 🠕',
  },
];

export {
  imageUrl,
  swiperBreakpoints,
  todayDate,
  minReleaseDate,
  maxReleaseDate,
  titles,
  endpoints,
  sorts,
  selectItems,
};
