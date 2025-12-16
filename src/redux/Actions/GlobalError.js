import { API_FAILED } from 'src/redux/Actions/Type';
export const setGlobalError = (error) => ({
  type: API_FAILED,
  payload: error,
});
