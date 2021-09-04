class Api {
  constructor(config) {
    this._url = config.url;
    this._headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    };
  }

  setToken() {
    this._headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json(); 
    }
    console.log(res);
    return Promise.reject(`Ошибка ${res.status}`);
  }

  getMovies = () => {
    return fetch(`${this._url}/movies`, {
      method: "GET",
      credentials: "omit",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((movies) => movies);
  };

  createMovie(data) {
    console.log(data);
    return fetch(`${this._url}/movies`, {
      method: "POST",
      credentials: "omit",
      headers: this._headers,
      body: JSON.stringify({
        movieId: data.id,
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailer: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.url}`,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      }),
    }).then(this._checkResponse);
  }

  deleteMovie(_id) {
    return fetch(`${this._url}/movies/${_id}`, {
      method: "DELETE",
      credentials: "omit",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      method: "GET",
      credentials: "omit",
      headers: this._headers,
    })
      .then(this._checkResponse); 
  }

  updateProfile(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      credentials: "omit",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }
}

export const apiConfig = new Api({
  url: "https://beatfilm-explorer.nomoredomains.monster/api",
});
