import * as types from './actionTypes';
import weddingApi from '../api/mockWeddingApi';
// import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


// export function createCourse(course) {
//   //debugger;
//   return { type: types.CREATE_COURSE, course };
//   // in ES6 if right is the sane as left, right can be ignored
// }


export function loadWeddingSuccess(weddings) {
  //debugger;
  return { type: types.LOAD_WEDDING_SUCCESS, weddings};
  // in ES6 if right is the sane as left, right can be ignored
}

// export function updateCoursesSuccess(course) {
//   return { type: types.UPDATE_COURSES_SUCCESS, course};
// }
//
// export function createCoursesSuccess(course) {
//   return { type: types.CREATE_COURSES_SUCCESS, course};
// }

// this is a thunk and every thunk return a function with dispatch
export function loadWeddings() {
  return function(dispatch){
    // dispatch(beginAjaxCall());
    return weddingApi.getAllWeddings().then(weddings => {
      dispatch(loadWeddingSuccess(weddings));
    }).catch(error => {
      throw(error);
    });
  };
}

// export function saveCourse(course) {
//   return function(dispatch, getState){
//     dispatch(beginAjaxCall());
//     return courseApi.saveCourse(course).then(savedCourse => {
//       course.id ? dispatch(updateCoursesSuccess(savedCourse)) :
//       dispatch(createCoursesSuccess(savedCourse));
//     }).catch(error => {
//       dispatch(ajaxCallError(error));
//       throw(error);
//     });
//   };
// }
