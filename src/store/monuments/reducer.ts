import { MonumentsAction, actions } from './actions';
import { Monument } from '../../entities/monument';
import { combineReducers } from 'redux';
import { getType } from 'typesafe-actions';

function selectedMonument(state: Monument = null, action: MonumentsAction): Monument {
  switch (action.type) {
    case getType(actions.selectMonument):
      return action.payload;
    default:
      return state;
  }
}

function monuments(state: Monument[] = [], action: MonumentsAction): Monument[] {
  switch (action.type) {
    case getType(actions.loadMonuments.success):
      return action.payload;
    default:
      return state;
  }
}

function createdMonument(state: Monument = null, action: MonumentsAction): Monument {
  switch (action.type) {
    case getType(actions.createMonument.success):
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  selectedMonument,
  monuments,
  createdMonument
});
