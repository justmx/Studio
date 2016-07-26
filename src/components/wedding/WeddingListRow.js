import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const WeddingListRow = ({wedding}) => {
  let serviceType = wedding.serviceType.join(" & ");
  return (
      <tr>
        <td><Link to={'/wedding/'+wedding.id}>{wedding.id}</Link></td>
        <td>{wedding.weddingDate}</td>
        <td>{wedding.groomName}</td>
        <td>{wedding.bridgeName}</td>
        <td>{wedding.length}</td>
        <td>{serviceType}</td>
      </tr>
  );
};

WeddingListRow.propTypes = {
  wedding: PropTypes.object.isRequired
};

export default WeddingListRow;
