import { Monument } from '../../entities/monument';
import { ThunkDispatch } from 'redux-thunk';
import { httpService } from '../../services/http';

export const SELECT_MONUMENT_ACTION_TYPE = '@monuments/selectMonument';

export const LOAD_MONUMENTS_REQUEST = '@monuments/loadMonumentsRequest';
export const LOAD_MONUMENTS_SUCCESS = '@monuments/loadMonumentsSuccess';
export const LOAD_MONUMENTS_FAILURE = '@monuments/loadMonumentsFailure';

export const CREATE_MONUMENT_ACTION_TYPE = '@monuments/createMonument'

export function loadMonuments() {
  return async (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch({ type: LOAD_MONUMENTS_REQUEST });
    try {
      let monuments = await httpService.get('monuments');

      dispatch({
        type: LOAD_MONUMENTS_SUCCESS,
        payload: monuments
      });
    } catch (error) {
      dispatch({ type: LOAD_MONUMENTS_FAILURE, payload: error })
    }
  };
}

export function selectMonument(monument: Monument) {
  return {
    type: SELECT_MONUMENT_ACTION_TYPE,
    payload: monument,
  };
}

export function createMonument(data: any) {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    dispatch({
      type: CREATE_MONUMENT_ACTION_TYPE,
      payload: httpService.post('monuments/', data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Request-Headers": "*",
          "Access-Control-Request-Method": "*"
        }
      })
    });
  }
}