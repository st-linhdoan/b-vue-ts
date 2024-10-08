import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import { environment } from '../../../config/enviroment';

export class ApiService {
  axiosInstance: AxiosInstance;

  constructor() {
    // Init axiosInstance
    this.axiosInstance = axios.create({
      baseURL: environment.apiBaseUrl,
      // Common header
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this._setInterceptors();
  }

  createURL(uri: (string | object)[]) {
    let paramsUrl;
    if (typeof uri[uri.length - 1] !== 'string') {
      paramsUrl = uri.pop();
      let url = uri.join('/');
      Object.keys(paramsUrl).forEach((x) => {
        url = url.replace(`:${x}`, paramsUrl[x]);
      });
      return url;
    } else {
      return uri.join('/');
    }
  }

  get(uri: (string | object)[], params = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.get(this.createURL(uri), { params, ...moreConfigs });
      this._handleRespond(request, resolve, reject);
    });
  }

  post(uri: (string | object)[], data = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.post(this.createURL(uri), data, moreConfigs);
      this._handleRespond(request, resolve, reject);
    });
  }

  put(uri: (string | object)[], data = {}, moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.put(this.createURL(uri), data, moreConfigs);
      this._handleRespond(request, resolve, reject);
    });
  }

  delete(uri: (string | object)[], moreConfigs = {}) {
    return new Promise((resolve, reject) => {
      const request = this.axiosInstance.delete(this.createURL(uri), moreConfigs);
      this._handleRespond(request, resolve, reject);
    });
  }

  multipeGets(apiRequests: any) {
    const apiReqs = apiRequests.map((v: any) => this.axiosInstance.get(v));
    return new Promise((resolve, reject) => {
      axios
        .all(apiReqs)
        .then((resp: any) => {
          resolve(resp.map((v: any) => v.data));
        })
        .catch((err: any) => reject(err));
    });
  }

  private _handleRespond(request: any, resolve, reject) {
    return request
      .then((resp: AxiosResponse) => {
        resolve(resp.data);
      })
      .catch((err: any) => {
        reject(err);
      });
  }

  private _setInterceptors() {
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError) => this._handleError(error)
    );
  }

  private async _handleError(error: AxiosError) {
    // Make error model before promise
    if (error.isAxiosError && error.response) {
      // Axios error
      return Promise.reject(error);
    } else {
      // Default | Network errors | CORS | ...
      return Promise.reject({});
    }
  }
}
