import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import merge from 'lodash/merge';

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

class Http {
  private instance: AxiosInstance | undefined;

  private defaults: AxiosRequestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
  };

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.init();
  }

  public init({
    config,
  }: {
    config?: AxiosRequestConfig;
    configFn?: (config: AxiosRequestConfig) => AxiosRequestConfig | Promise<AxiosRequestConfig>;
  } = {}) {
    const http = axios.create(merge(this.defaults, config));
    http.interceptors.response.use(
      response => response,
      error => {
        const { response } = error;

        return Http.handleError(response);
      },
    );
    this.instance = http;
    return http;
  }

  public get request(): AxiosInstance {
    return this.http;
  }

  private static async handleError(error: any) {
    const { status } = error || {};

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
    }

    return await Promise.reject(error);
  }
}

export default new Http();
