import React, {PropTypes} from 'react';
import WeddingListRow from './WeddingListRow';

const WeddingTableHeader = ({changeID, onChangeWeddingDate}) => {
  return (
      <thead>
      <tr>
        <th><a onClick={changeID}>CustomerId</a></th>
        <th><a onClick={onChangeWeddingDate}>Wedding Date</a></th>
        <th>Groom</th>
        <th>Bridge</th>
        <th>Length</th>
        <th><a>Service Types</a></th>
      </tr>
      </thead>
  );
};

WeddingTableHeader.propTypes = {
  changeID: PropTypes.func.isRequired,
  onChangeWeddingDate: PropTypes.func.isRequired
};

export default WeddingTableHeader;
