import axios from 'axios';
import { Storage } from '@capacitor/storage';

const baseURL = process.env.VUE_APP_API_URL;

const api = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(async (config) => {
  const token = await Storage.get({ key: 'token' });
  config.headers.Authorization = `Bearer ${token.value || null}`;

  return config;
});

api.interceptors.response.use((response) => response,
  (pError) => {
    if (pError.response.status === 401) {
      console.log(pError.response.status);
      window.location = '/logout';
    }

    return Promise.reject(pError);
  });

export default api;
