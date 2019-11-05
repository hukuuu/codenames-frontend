import { getToken } from './auth'

export default (url, options = {}) =>
  fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json'
    }
  })
