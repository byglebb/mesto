export default class Api {
  constructor(config) {
    this.url = config.url;
    this.headers = config.headers;
    this.authorization = this.headers.authorization;
  }

  handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialCards() {
    this.urlCards = this.url + `/cards`;
    return fetch(this.urlCards, {
      headers: this.headers
    })
      .then(this.handleResponse)
  }

  addCard(data) {
    return fetch(this.urlCards, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    })
      .then(this.handleResponse)
  }

  getUserInfo() {
    this.urlInfo = this.url + `/users/me`;
    return fetch(this.urlInfo, {
      headers: this.headers
    })
      .then(this.handleResponse)
  }

  setUserInfo(objectValues) {
    console.log(objectValues);
    return fetch(this.urlInfo, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(objectValues)
    })
      .then(this.handleResponse);
  }


}