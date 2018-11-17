
import axios from 'axios'
import sessionKey from './sessionKey'
import router from '../app'

function toLogin() {
  setTimeout(() => {
    if (location.pathname === '/login') return;
    router.push(
      `/login?from=${encodeURIComponent(location.pathname + location.search)}`
    );
  });
}

function send(url ,data, method) {
  let options = {
    method,
    url,
    data
  }

  if (!sessionKey.get()) {
    return toLogin();
  }

  return axios(options);
}

export default {
  get(url, data) {
    return send(url, data, 'get')
  },
  post(url, data) {
    return send(url, data, 'post')
  },
  put(url, data) {
    return send(url, data, 'put')
  },
  delete(url, data) {
    return send(url, data, 'delete')
  },
  patch(url, data) {
    return send(url, data, 'patch')
  }
}
