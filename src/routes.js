import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import WeddingsPage from './components/wedding/WeddingsPage';
import ManageWeddingPage from './components/wedding/ManageWeddingPage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="weddings" component={WeddingsPage} />
    <Route path="wedding" component={ManageWeddingPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);


// <Route path="courses" component={CoursesPage} />
// <Route path="course" component={ManageCoursePage} />
// <Route path="course/:id" component={ManageCoursePage} />
