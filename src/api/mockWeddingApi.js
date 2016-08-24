/* eslint-disable no-console */
import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const weddings = [
  {
    id: "01001",
    packageType: 'Full Day',
    groomName: "Michael",
    brideName: "Maria",
    weddingDate: "2016-11-06",
    length: "14",
    serviceType: "Photo & Video"
  },
  {
    id: "01002",
    packageType: '10hrs',
    groomName: "Jim",
    brideName: "Rose",
    weddingDate: "2016-07-08",
    length: "10",
    serviceType: "Photo & Video"
  },
  {
    id: "01003",
    packageType: 'Full Day',
    groomName: "Tim",
    brideName: "Lucy",
    weddingDate: "2016-08-31",
    length: "14",
    serviceType: "Photo"
  },
  {
    id: "01004",
    packageType: 'Full Day',
    groomName: "Michael",
    brideName: "Maria",
    weddingDate: "2016-11-06",
    length: "14",
    serviceType: "Photo & Video"
  },
  {
    id: "01005",
    packageType: '12hrs',
    groomName: "Fang",
    brideName: "Wendy",
    weddingDate: "2016-04-06",
    length: "12",
    serviceType: "Video"
  }
];

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }
//
//This would be performed on the server in a real app. Just stubbing in.
const generateId = (weddings) => {
  let newId=parseInt(weddings[weddings.length-1].id) + 1;
  return '0'+ newId;
};

const sortByWeddingDate = () => {
  const _weddings = weddings;
   return _weddings.sort(function(a,b){
    let d1= new Date(a.weddingDate);
    let d2 =new Date(b.weddingDate);
    return d1 - d2;
  });
};

class WeddingApi {
  static getAllWeddings() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], weddings));
      }, delay);
    });
  }

  static sortWeddingDate(flag) {
    let _weddings = [];
    if(flag){
       _weddings = sortByWeddingDate();
    } else {
       _weddings = sortByWeddingDate().reverse();
    }
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], _weddings));
      }, delay);
    });
  }

  static saveWedding(wedding) {
    wedding = Object.assign({}, wedding); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
      //  const minGroomNameLength = 1;
      console.log('in API!!');
        if (!wedding.groomName) {
          reject(`Groom\'s Name must not be empty.`);
        }

        if (!wedding.brideName) {
          reject(`Bridge\'s Name must not be empty.`);
        }


        if (wedding.id) {
          const existingWeddingIndex = weddings.findIndex(a => a.id == wedding.id);
          weddings.splice(existingWeddingIndex, 1, wedding);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          wedding.id = generateId(weddings);
          weddings.push(wedding);
        }

        resolve(wedding);
      }, delay);
    });
  }
  //
  // static deleteCourse(courseId) {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const indexOfCourseToDelete = courses.findIndex(course => {
  //         course.courseId == courseId;
  //       });
  //       courses.splice(indexOfCourseToDelete, 1);
  //       resolve();
  //     }, delay);
  //   });
  // }
}

export default WeddingApi;
