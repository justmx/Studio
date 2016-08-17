import {combineReducers} from 'redux';
import weddings from './weddingReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

//there could be multople reducers, so this is the rootReducer to combine all Reducers
const rootReducer = combineReducers({
  weddings,
  ajaxCallsInProgress
});

export default rootReducer;
