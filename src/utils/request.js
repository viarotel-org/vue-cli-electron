import axios from 'axios';
import qs from 'qs';
import {
  localStorage,
} from '@/utils/storages';
import {
  baseUrl,
  timeout,
  resCode,
} from '@/config/request';

const service = axios.create({
  baseURL: baseUrl,
  timeout,
});
// 请求拦截
service.interceptors.request.use((request) => {
  const token = localStorage.get('token');
  if (token) request.headers.token = token;

  // 解决query无法传递数组的问题
  request.paramsSerializer = (params) => qs.stringify(params, {
    arrayFormat: 'repeat',
  });

  return request;
}, (error) => Promise.reject(error));

// 响应拦截
service.interceptors.response.use(async (response) => {
  const res = response.data;
  switch (res.code) {
    default:
      if (res.code === resCode) {
        return res;
      }
      return Promise.reject(res);
  }
}, (error) => Promise.reject(error));

export default service;
