enum Endpoints {
  topRated = 'movie/top_rated',
  latest = 'movie/now_playing',
  lists = 'movie/lists',
  popular = 'movie/popular',
  upcoming = 'movie/upcoming',
  discoverMovies = 'discover/movie',
  searchMovie = 'search/movie',
  searchPerson = 'search/person',
  searchTv = 'search/tv',
  searchCollections = 'search/collection',
  searchCompanies = 'search/company',
  multiSearch = 'search/multi',
}

enum Methods {
  get = 'GET',
  post = 'POST',
  patch = 'PATCH',
  put = 'PUT',
  delete = 'DELETE',
}

enum RouterPaths {
  home = '/',
  main = '/main',
  movies = '/movies',
}

export { Endpoints, Methods, RouterPaths };
