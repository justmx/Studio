import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
  render(){
    return (
      <div>
        <h1>About</h1>
        <p>This App is used for Studio Management</p>
        <Link to="/" className="btn btn-primary btn-lg">Back Home</Link>
      </div>
    );
  }
}

export default AboutPage;
