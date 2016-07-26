import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function weddingReducer(state = initialState.weddings, action) {
  switch (action.type) {
    case types.LOAD_WEDDING_SUCCESS:
      return action.weddings;
    //
    // case types.CREATE_COURSES_SUCCESS:
    //     return [
    //       ...state,
    //       Object.assign({}, action.course)
    //     ];
    //
    //
    // case types.UPDATE_COURSES_SUCCESS:
    //     return [
    //       ...state.filter(course => course.id !== action.course.id),
    //       Object.assign({}, action.course)
    //     ];
    default:
      return state;
  }
}
