class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies = () => {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      credentials: "include",
      mode: "cors",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((movies) => movies);
  };

  сreateMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        movieId: data.movieId,
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailer: data.trailer,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
        thumbnail: data.thumbnail,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(_id) {
    return fetch(`${this._url}/movies/${_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "include",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => data);
  }

  updateProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: "include",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    }).then(this._checkResponse);
  }
}

export const apiConfig = new Api({
  url: "beatfilm-explorer.nomoredomains.monster/api",
});