import expect from 'expect';
import { createStore } from 'redux';
import * as actions from '../actions/weddingActions';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';

describe('Store', () => {
  it('should handle creating wedding', () => {
    const store= createStore(rootReducer, initialState);
    const wedding = {
      id: '01007'
    };

    //act
    const action = actions.createWeddingSuccess(wedding);
    store.dispatch(action);

    //assert
    const actual = store.getState().weddings[0];
    const expected = {
      id: '01007'
    };
    expect(actual).toEqual(expected);
  });
});
