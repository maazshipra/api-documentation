import { combineReducers } from 'redux';
import globalError from 'src/redux/Reducers/GlobalErrorReducer';

const RootReducer = combineReducers({
  globalError,
});
export default RootReducer;
