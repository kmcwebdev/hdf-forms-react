import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { sanitizeObjProperty } from 'src/utilities/sanitize-obj-property.utils';

export interface HttpError extends AxiosError {}

export default sanitizeObjProperty;

export const makeRequest = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  if (process.env.NODE_ENV === 'production') {
    config.baseURL = process.env.REACT_APP_API_BASE_URL;
  }

  axios.defaults.headers['Content-Type'] = 'application/json';
  axios.defaults.headers['charset'] = 'utf-8';

  const httpRequest = await axios.request({
    ...config,
  });

  return httpRequest;
};

axios.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    sanitizeObjProperty(request.params);

    return request;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
