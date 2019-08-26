import { SELECT_MONUMENT_ACTION_TYPE, LOAD_MONUMENTS_SUCCESS } from './actions';
import { Monument } from '../../entities/monument';
import { combineReducers } from 'redux';

function selectedMonument(state: Monument = null, action: any): Monument {
  switch (action.type) {
    case SELECT_MONUMENT_ACTION_TYPE:
      return action.payload;
    default:
      return state;
  }
}

function monuments(state: Monument[] = [], action: any): Monument[] {
  switch (action.type) {
    case LOAD_MONUMENTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  selectedMonument,
  monuments,
});
