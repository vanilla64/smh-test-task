import { url } from './constants'

class Api {
  constructor({ login, register, blogs }) {
    this._login = login
    this._register = register
    this._blogs = blogs
  }

  _initialRequest = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  login = ({ email, password }) => {
    return fetch(this._login, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => this._initialRequest(res))
  }

  register = ({ name, email, password }) => {
    return fetch(this._register, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    }).then(res => this._initialRequest(res))
  }
}

const api = new Api(url)

export default api;
