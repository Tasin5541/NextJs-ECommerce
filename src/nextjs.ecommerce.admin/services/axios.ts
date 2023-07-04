import axios, { AxiosResponse } from "axios";

export const instance = axios.create();

const responseBody = (response: AxiosResponse) => response.data;

const transform = (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) => resolve(response));

export const requests = {
  get: (url: string, body: object) =>
    instance.get(url, { params: body }).then(transform).then(responseBody),
  post: (url: string, body: object) => instance.post(url, body).then(transform).then(responseBody),
  put: (url: string, body: object) => instance.put(url, body).then(transform).then(responseBody),
  delete: (url: string) => instance.delete(url).then(transform).then(responseBody),
  patch: (url: string, body: object) =>
    instance.patch(url, body).then(transform).then(responseBody),
};
