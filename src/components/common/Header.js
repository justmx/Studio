import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  //show a new dot every 100ms and up to 20 dots
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/weddings" activeClassName="active">Weddings</Link>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};


Header.propTypes = {
  loading: PropTypes.bool
};

export default Header;
