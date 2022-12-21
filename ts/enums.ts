enum Endpoints {
  topRated = 'movie/top_rated',
  latest = 'movie/now_playing',
  lists = 'movie/lists',
  popular = 'movie/popular',
  upcoming = 'movie/upcoming',
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

export { Endpoints, Methods };
