import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
// import sagaMonitor from '../../../sagaMonitor'
//import thunk from 'redux-thunk';
// single store

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  return {
      store: createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant(), logger)),
      runSaga: sagaMiddleware.run
  };
}
