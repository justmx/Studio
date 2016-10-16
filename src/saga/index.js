/* eslint-disable no-constant-condition */

import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';
import * as actions from '../actions/weddingActions';
import * as ajaxActions from '../actions/ajaxStatusActions';
//import * as types from '..actions/actionTypes';
import weddingApi from '../api/mockWeddingApi';

function* fetchWeddings() {
 try {
//   console.log('hihi');
   yield put (ajaxActions.beginAjaxCall());
   const wedding_data =  yield call(weddingApi.getAllWeddings);
   yield put (actions.loadWeddingSuccess(wedding_data));
 } catch (error) {
   yield put(actions.loadError(error));
 }
}

function* watchFetchWeddings() {
 yield* takeEvery('WEDDING_FETCH_REQUESTED', fetchWeddings);
}





function* sortWeddingDate(action) {
 try {
  // console.log('hihi');
   const {sort_flag} = action;
   yield put (ajaxActions.beginAjaxCall());
   const wedding_data =  yield call(weddingApi.sortWeddingDate, sort_flag);
   yield put (actions.sortWeddingDateSuccess(wedding_data));
 } catch (error) {
   yield put(actions.loadError(error));
 }
}

function* watchSortWeddingDate() {
 yield* takeLatest('SORT_BY_WEDDING_DATE', sortWeddingDate);
}

function* saveBasicWedding(action) {
 try {
   const {wedding} = action;
   //console.log('Saving Wedding! ' + wedding);
   yield put (ajaxActions.beginAjaxCall());
   const saveWedding = yield call(weddingApi.saveWedding, wedding);
   if(wedding.id){
     yield put (actions.updateWeddingSuccess(saveWedding));
   } else {
      yield put (actions.createWeddingSuccess(saveWedding));
   }
 } catch (error) {
  // console.log('erroror!!! ' + error);
   yield put(actions.loadError(error));
 }
}

function* watchSaveWedding() {
  yield* takeEvery('WEDDING_SAVE_REQUESTED', saveBasicWedding);
//   while(true){
//   //  const {wedding} = yield take(actions.saveBasicWeddingInfo);
//    console.log('watchSaveWedding ');
// //   yield call (saveBasicWedding, wedding);
//   }
}

export default function* rootSaga() {
  yield [
    fork(watchFetchWeddings),
    fork(watchSaveWedding),
    fork(watchSortWeddingDate)
  ];
}
