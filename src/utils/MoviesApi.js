class MovieApi {
  constructor(config) {
    this._url = config.url;
    this._headers = {
      'Content-Type': 'application/json'
    }
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies = () => {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      'credentials': 'include',
      headers: this._headers,
    }).then(this._checkResponse)
    .then((movies) => movies);
  }
}

export const movieApiConfig = new MovieApi({
  url: "https://api.nomoreparties.co/",
});
