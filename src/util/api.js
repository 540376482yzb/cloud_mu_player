import { config } from '../config';

const normalizeResponseErrors = res => {
  if (!res.ok) {
    if (
      res.headers.has('content-type') &&
      res.headers.get('content-type').startsWith('application/json')
    ) {
      return res.json().then(err => Promise.reject(err))
    }
    return Promise.reject({
      code: res.status,
      message: res.statusText
    })
  }
  return res
}

export const callApi = (method, path = '') => {
  return fetch(config.api + path, {
    method,
  })
    .then(normalizeResponseErrors)
    .then(res => res.json())
}

