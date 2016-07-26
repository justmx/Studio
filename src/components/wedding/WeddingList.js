import React, {PropTypes} from 'react';
import WeddingListRow from './WeddingListRow';

const WeddingList = ({weddings}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>CustomerId</th>
        <th>Wedding Date</th>
        <th>Groom</th>
        <th>Bridge</th>
        <th>Length</th>
        <th>Service Types</th>
      </tr>
      </thead>
      <tbody>
      {weddings.map(wedding =>
        <WeddingListRow key={wedding.id} wedding={wedding}/>
      )}
      </tbody>
    </table>
  );
};

WeddingList.propTypes = {
  weddings: PropTypes.array.isRequired
};

export default WeddingList;
