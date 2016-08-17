/* eslint-disable no-console */
/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';
import {loadWeddings} from './actions/weddingActions';
// import {loadAuthors} from './actions/authorActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/toastr/build/toastr.min.css';
//import '../node_modules/bootstrap/less/dropdowns.less';
import '../node_modules/react-datepicker/dist/react-datepicker.css';
//import '../node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker.css';

import rootSaga from './saga'

const configuredStore= configureStore();
const store = configuredStore.store;
configuredStore.runSaga(rootSaga);
 //Can pass initialState parrameter here
store.dispatch(loadWeddings());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
      document.getElementById('app')
);
