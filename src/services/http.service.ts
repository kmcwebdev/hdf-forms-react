import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface HttpError extends AxiosError {}

const removedUndefinedProperty = <T extends object>(obj: T) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const IS_NOTHING =
        obj[key] === undefined ||
        obj[key] === null ||
        String(obj[key])?.length === 0;

      if (IS_NOTHING) {
        delete obj[key];
      }
    }
  }
};

export default removedUndefinedProperty;

export const makeRequest = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  if (process.env.NODE_ENV === 'production') {
    config.baseURL = process.env.REACT_APP_API_BASE_URL;
  }

  config.withCredentials = true;
  axios.defaults.headers['Content-Type'] = 'application/json';
  axios.defaults.headers['charset'] = 'utf-8';

  const httpRequest = await axios.request({
    ...config,
  });

  return httpRequest;
};

axios.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    removedUndefinedProperty(request.params);

    return request;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
