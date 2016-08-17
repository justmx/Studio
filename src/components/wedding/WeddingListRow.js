import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const WeddingListRow = ({wedding}) => {

  //let serviceType = wedding.serviceType.length > 1 ? wedding.serviceType.join(" & ") : '';

  return (
      <tr>
        <td><Link to={'/wedding/'+wedding.id}>{wedding.id}</Link></td>
        <td>{wedding.weddingDate}</td>
        <td>{wedding.groomName}</td>
        <td>{wedding.brideName}</td>
        <td>{wedding.length}</td>
        <td>{wedding.serviceType}</td>
      </tr>
  );
};

WeddingListRow.propTypes = {
  wedding: PropTypes.object.isRequired
};

export default WeddingListRow;
