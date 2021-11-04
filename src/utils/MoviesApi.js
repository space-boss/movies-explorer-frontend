class MovieApi {
  constructor(config) {
    this._url = config.url;
    this._headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      method: "GET",
      headers: this._headers,
    }).then(this._checkResponse)
  }
}

export const movieApiConfig = new MovieApi({
  url: "https://api.nomoreparties.co",
});

