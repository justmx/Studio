import {combineReducers} from 'redux';
import weddings from './weddingReducer';

//there could be multople reducers, so this is the rootReducer to combine all Reducers
const rootReducer = combineReducers({
  weddings
});

export default rootReducer;
