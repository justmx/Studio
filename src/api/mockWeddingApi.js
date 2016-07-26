import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const weddings = [
  {
    id: "01001",
    packageType: 'Full Day',
    groomName: "Michael",
    bridgeName: "Maria",
    weddingDate: "17/06/2016",
    length: "14",
    serviceType: ["Photo", "Video"]
  },
  {
    id: "01002",
    packageType: '10hrs',
    groomName: "Jim",
    bridgeName: "Rose",
    weddingDate: "25/06/2016",
    length: "10",
    serviceType: ["Photo", "Video"]
  },
  {
    id: "01003",
    packageType: 'Full Day',
    groomName: "Tim",
    bridgeName: "Lucy",
    weddingDate: "25/06/2016",
    length: "14",
    serviceType: ["Photo"]
  },
  {
    id: "01004",
    packageType: 'Full Day',
    groomName: "Michael",
    bridgeName: "Maria",
    weddingDate: "27/06/2016",
    length: "14",
    serviceType: ["Photo", "Video"]
  },
  {
    id: "01005",
    packageType: '12hrs',
    groomName: "Fang",
    bridgeName: "Wendy",
    weddingDate: "28/06/2016",
    length: "12",
    serviceType: ["Photo", "Video"]
  }
];

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }
//
// //This would be performed on the server in a real app. Just stubbing in.
// const generateId = (course) => {
//   return replaceAll(course.title, ' ', '-');
// };

class WeddingApi {
  static getAllWeddings() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], weddings));
      }, delay);
    });
  }

  // static saveCourse(course) {
  //   course = Object.assign({}, course); // to avoid manipulating object passed in.
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // Simulate server-side validation
  //       const minCourseTitleLength = 1;
  //       if (course.title.length < minCourseTitleLength) {
  //         reject(`Title must be at least ${minCourseTitleLength} characters.`);
  //       }
  //
  //       if (course.id) {
  //         const existingCourseIndex = courses.findIndex(a => a.id == course.id);
  //         courses.splice(existingCourseIndex, 1, course);
  //       } else {
  //         //Just simulating creation here.
  //         //The server would generate ids and watchHref's for new courses in a real app.
  //         //Cloning so copy returned is passed by value rather than by reference.
  //         course.id = generateId(course);
  //         course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
  //         courses.push(course);
  //       }
  //
  //       resolve(course);
  //     }, delay);
  //   });
  // }
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
