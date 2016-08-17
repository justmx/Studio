import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function weddingReducer(state = initialState.weddings, action) {
  switch (action.type) {
    case types.LOAD_WEDDING_SUCCESS:
      return action.weddings;
    case types.CREATE_WEDDING_SUCCESS:
        return [
          ...state,
          Object.assign({}, action.wedding)
        ];
    case types.UPDATE_WEDDING_SUCCESS:
        return [
          ...state.filter(wedding => wedding.id !== action.wedding.id),
          Object.assign({}, action.wedding)
        ];
    default:
      return state;
  }
}
