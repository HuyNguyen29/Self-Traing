import {ACCESS_TOKEN_STORAGE} from '../const/common';
import {getStorage, setStorage} from '../utils/storage';
const REQUEST_TIMEOUT = 300000;

const buildURLWithParams = (url, params = {}) => {
  let requestedURL = url;
  if (params) {
    const keys = Object.keys(params);

    if (Array.isArray(keys) && keys.length > 0) {
      requestedURL += '?';
      for (var property of keys) {
        const index = keys.indexOf(property);
        if (index > 0 && index < keys.length) {
          requestedURL += '&';
        }
        requestedURL += `${property}=${params[property]}`;
      }
    }
  }
  return requestedURL;
};

export default class APIUtils {
  accessToken: string;
  constructor() {
    this.accessToken = '';
  }

  static async setAccessToken(token) {
    setStorage(ACCESS_TOKEN_STORAGE, token);
    console.log('>>>>setAccessToken', token);
  }

  static async getAccessToken() {
    return await getStorage(ACCESS_TOKEN_STORAGE);
  }

  static async get(url, config = {headers: {}, params: {}}) {
    let token = null;
    token = await getStorage(ACCESS_TOKEN_STORAGE);
    return new Promise((resolve, reject) => {
      let headersDefault = token
        ? {
            'Content-Type': 'application/json',
            Accept: 'application/json; charset=utf-8',

            Authorization: `Bearer ${token}`,
          }
        : {
            'Content-Type': 'application/json',
            Accept: 'application/json; charset=utf-8',
          };
      const {headers, params, ...restConfig} = config;
      const requestedURL = buildURLWithParams(url, params);

      // eslint-disable-next-line no-undef
      const controller = new AbortController();
      const signal = controller.signal;

      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...headersDefault,
          ...config.headers,
        },
        ...restConfig,
        method: 'GET',
        signal,
      };

      setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT);
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url: requestedURL,
          config: fetchConfig,
        });
      }

      fetch(requestedURL, fetchConfig)
        .then(async response => {
          let responseJson = {};
          try {
            responseJson = await response.json();
          } catch (err) {}
          if (__DEV__) {
            console.log('>>>>>response>>>>>', {
              url: requestedURL,
              data: responseJson,
              status: response.status,
            });
          }
          if (response.status >= 400 && response.status <= 499) {
            throw {data: responseJson, status: response.status};
          }
          if (response.status >= 200 && response.status <= 299) {
            return {data: responseJson, status: response.status};
          }
          throw {data: responseJson, status: response.status};
        })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          console.log('>>>>>error>>>>>', {url: requestedURL, error});
          reject(error);
        });
    });
  }

  static async post(url, config = {headers: {}}) {
    console.log('configconfigconfigconfig', config);
    let token = null;
    token = await getStorage(ACCESS_TOKEN_STORAGE);
    return new Promise((resolve, reject) => {
      let headersDefault = token
        ? {
            'Content-Type': 'application/json',
            Accept: 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
          }
        : {
            'Content-Type': 'application/json',
            Accept: 'application/json; charset=utf-8',
          };
      const {headers, body, params, ...restConfig} = config;

      // eslint-disable-next-line no-undef
      const controller = new AbortController();
      const signal = controller.signal;

      let tmpBody = JSON.stringify(config.body);

      if (config?.headers?.['Content-Type'] === 'multipart/form-data') {
        tmpBody = config.body;
      }

      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...headersDefault,
          ...config.headers,
        },
        ...restConfig,
        signal,
        method: 'POST',
        body: tmpBody,
      };
      setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT);
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url,
          config: fetchConfig,
        });
      }
      fetch(url, fetchConfig)
        .then(async response => {
          let responseJson = {};
          try {
            responseJson = await response.json();
          } catch (err) {}
          if (__DEV__) {
            console.log('>>>>>response>>>>>', {
              url,
              data: responseJson,
              status: response.status,
            });
          }
          if (response.status >= 400 && response.status <= 499) {
            throw {data: responseJson, status: response.status};
          }
          if (response.status >= 200 && response.status <= 299) {
            return {data: responseJson, status: response.status};
          }
          throw {data: responseJson, status: response.status};
        })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          console.log('>>>>>error>>>>>', error);
          reject(error);
        });
    });
  }

  static delete(url, config = {headers: {}}) {
    return new Promise((resolve, reject) => {
      let headersDefault = {
        'Content-Type': 'application/json',
        Accept: 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        e_platform: 'mobile',
      };
      const {headers, body, params, ...restConfig} = config;

      // eslint-disable-next-line no-undef
      const controller = new AbortController();
      const signal = controller.signal;

      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...headersDefault,
          ...config.headers,
        },
        ...restConfig,
        signal,
        method: 'DELETE',
        body: JSON.stringify(config.body),
      };
      setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT);
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url,
          config: fetchConfig,
        });
      }
      fetch(url, fetchConfig)
        .then(async response => {
          let responseJson = {};
          try {
            responseJson = await response.json();
          } catch (err) {}
          if (__DEV__) {
            console.log('>>>>>response>>>>>', {
              url,
              data: responseJson,
              status: response.status,
            });
          }
          if (response.status >= 400 && response.status <= 499) {
            throw {data: responseJson, status: response.status};
          }
          if (response.status >= 200 && response.status <= 299) {
            return {data: responseJson, status: response.status};
          }
          throw {data: responseJson, status: response.status};
        })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          console.log('>>>>>error>>>>>', error);
          reject(error);
        });
    });
  }

  static async put(url, config = {headers: {}}) {
    console.log('configconfigconfigconfig', config);
    let token = null;
    token = await getStorage(ACCESS_TOKEN_STORAGE);
    return new Promise((resolve, reject) => {
      let headersDefault = token
        ? {
            'Content-Type': 'application/json',
            Accept: 'application/json; charset=utf-8',
            Authorization: `Bearer ${token}`,
          }
        : {
            'Content-Type': 'application/json',
            Accept: 'application/json; charset=utf-8',
          };
      const {headers, body, params, ...restConfig} = config;

      // eslint-disable-next-line no-undef
      const controller = new AbortController();
      const signal = controller.signal;

      const fetchConfig = {
        cache: 'default',
        credentials: 'include',
        headers: {
          ...headersDefault,
          ...config.headers,
        },
        ...restConfig,
        signal,
        method: 'PUT',
        body: JSON.stringify(config.body),
      };
      setTimeout(() => {
        controller.abort();
      }, REQUEST_TIMEOUT);
      if (__DEV__) {
        console.log('>>>>>request>>>>>', {
          url,
          config: fetchConfig,
        });
      }
      fetch(url, fetchConfig)
        .then(async response => {
          let responseJson = {};
          try {
            responseJson = await response.json();
          } catch (err) {}
          if (__DEV__) {
            console.log('>>>>>response>>>>>', {
              url,
              data: responseJson,
              status: response.status,
            });
          }
          if (response.status >= 400 && response.status <= 499) {
            throw {data: responseJson, status: response.status};
          }
          if (response.status >= 200 && response.status <= 299) {
            return {data: responseJson, status: response.status};
          }
          throw {data: responseJson, status: response.status};
        })
        .then(res => {
          resolve(res);
        })
        .catch(error => {
          console.log('>>>>>error>>>>>', error);
          reject(error);
        });
    });
  }
}
