import axios from 'axios';
import {
  convertKeysToSnakeCase,
  convertKeysToCamelCase,
} from 'src/utils/formatUtils';
import store from 'src/redux/store';
import { setGlobalError } from 'src/redux/Actions/GlobalError';

const api = axios.create();

function requestHandler(req) {
  let isJsonData = true;
  if (req.headers['Content-Type'] !== 'application/json') isJsonData = false;
  return {
    ...req,
    data: isJsonData ? convertKeysToSnakeCase(req.data) : req.data,
    params: convertKeysToSnakeCase(req.params),
    headers: {
      Authorization: `Token ${localStorage.getItem('token')}`,
      ...req.headers,
    },
  };
}

function responseSuccessHandler(res) {
  return convertKeysToCamelCase(res.data);
}

function responseErrorHandler(error) {
  store.dispatch(setGlobalError(error));
  return Promise.reject(error);
}

api.interceptors.request.use(requestHandler);
api.interceptors.response.use(responseSuccessHandler, responseErrorHandler);

export default api;
