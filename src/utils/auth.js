class AuthApi {
  constructor(config){
    this._url = config.url;
    this._headers = {
      "Accept": "application/json",
      "Content-Type": "application/json", 
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
  };

  
  register(name, email, password) {
    return fetch(`${this._url}/signup`, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({ name, email, password})
    }).then(this._checkResponse)
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
  };

  authorize(email, password) {
    return fetch(`${this._url}/signin`, {
      method: "POST",
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({email, password})
    }).then(this._checkResponse);
  };

  getContent(token) {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }).then(this._checkResponse)
  };
}

export const logout = () => {
  return fetch(`${this._url}/users/signout`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(this._checkResponse)
    .then((data) => data);
};


export const authApi = new AuthApi({
  url: "beatfilm-explorer.nomoredomains.monster/api",
});