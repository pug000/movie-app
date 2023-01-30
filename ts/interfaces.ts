interface Movie {
  poster_path: string | null;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string | null;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

interface ResponseResult {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

interface SortType {
  type: string;
  releaseDate: string;
}

interface SelectOption {
  text: string;
  value: string;
}

interface ResponseResultWithDates extends ResponseResult {
  dates?: {
    minimum: string;
    maximum: string;
  };
  title: string;
  sortBy: SortType;
}

export type { ResponseResult, ResponseResultWithDates, Movie, SortType, SelectOption };
