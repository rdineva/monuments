import { combineReducers } from 'redux';
import monumentsReducer from './monuments/reducer';

export default combineReducers({
  monuments: monumentsReducer,
});
