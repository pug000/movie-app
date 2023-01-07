import { getImage } from 'utils/functions';
import { mockedMovieResponse } from './constants';

const getExpectedImage = (width: string) =>
  `https://image.tmdb.org/t/p/${width}/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg`;

describe('getImage function', () => {
  test('should be the correct image', () => {
    expect(getImage(mockedMovieResponse.results[0].poster_path, 'w300')).toBe(
      getExpectedImage('w300')
    );
    expect(getImage(mockedMovieResponse.results[0].poster_path, 'w500')).toBe(
      getExpectedImage('w500')
    );
    expect(getImage(mockedMovieResponse.results[0].poster_path, 'original')).toBe(
      getExpectedImage('original')
    );
  });

  test('should be the placeholder image', () => {
    expect(getImage(null, '')).toBe('https://via.placeholder.com/200x300');
  });

  test('should be the placeholder image with custom size', () => {
    expect(getImage(null, '', 254, 522)).toBe('https://via.placeholder.com/254x522');
  });
});
