import { AxiosRequestConfig } from 'axios';
import { Struct, create } from 'superstruct';
import { axiosInstance } from './AxiosInstance';

export function fetchInternal<T>({
  url,
  method,
  data,
  headers,
  schema,
}: AxiosRequestConfig & { schema: Struct<T> }) {
  return axiosInstance
    .request<T>({
      url,
      method,
      data,
      headers,
    })
    .then(response => {
      try {
        return create(response.data, schema);
      } catch (error) {
        throw new Error('Invalid response from server');
        // Here we can handle what exactly is wrong with the response as superstruct will throw an detailed error
        // For example, title is required, but it's not in the response and etc
        // Then log it to sentry, so we can see that current backend changes broke the app on previous versions
      }
    });
}
