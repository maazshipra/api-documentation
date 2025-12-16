import { API_FAILED } from 'src/redux/Actions/Type';

const initialState = {
  message: null,
};

const globalError = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case API_FAILED:
      return {
        ...state,
        message: payload.message,
      };
    default:
      return state;
  }
};

export default globalError;
