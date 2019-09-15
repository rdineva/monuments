import { combineReducers } from 'redux';
import monumentsReducer from './monuments/reducer';

const rootReducer = combineReducers({
  monuments: monumentsReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
