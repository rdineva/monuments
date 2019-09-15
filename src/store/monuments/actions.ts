import { ThunkDispatch } from 'redux-thunk';
import { createStandardAction, createAsyncAction, ActionType } from 'typesafe-actions';
import { httpService } from '../../services/http';
import { Monument } from '../../entities/monument';

export const actions = {
  selectMonument: createStandardAction(
    '@monuments/selectMonument',
  )
    <Monument>(),
  loadMonuments: createAsyncAction(
    '@monuments/loadMonumentsRequest',
    '@monuments/loadMonumentsSuccess',
    '@monuments/loadMonumentsFailure',
  )
    <void, Array<Monument>, Error>(),
  createMonument: createAsyncAction(
    '@monuments/createMonumentRequest',
    '@monuments/createMonumentSuccess',
    '@monuments/createMonumentFailure',
  )
    <void, Monument, Error>(),
};

export function loadMonuments() {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch(actions.loadMonuments.request);
    try {
      const monuments = await httpService.get('monuments');
      dispatch(actions.loadMonuments.success(monuments));
    } catch (error) {
      dispatch(actions.loadMonuments.failure);
    }
  };
}

export function selectMonument(id: string) {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    const monument: Monument = await httpService.get(`monuments/${id}`);
    dispatch(actions.selectMonument(monument));
  };
}

export function createMonument(data: any) {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch(actions.createMonument.request);
    try {
      const newMonument: Monument = await httpService.post('monuments/', data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'Access-Control-Request-Method': '*',
        },
      });

      dispatch(actions.createMonument.success(newMonument));
    } catch (error) {
      dispatch(actions.createMonument.failure);
    }
  };
}

export type MonumentsAction = ActionType<typeof actions>;
