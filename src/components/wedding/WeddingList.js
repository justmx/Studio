import React, {PropTypes} from 'react';
import WeddingListRow from './WeddingListRow';
import WeddingTableHeader from './WeddingTableHeader';

const WeddingList = ({weddings, onChangeID, onChangeWeddingDate}) => {
  return (
    <table className="table">
      <WeddingTableHeader changeID={onChangeID} onChangeWeddingDate={onChangeWeddingDate}/>
      <tbody>
      {weddings.map(wedding =>
        <WeddingListRow key={wedding.id} wedding={wedding}/>
      )}
      </tbody>
    </table>
  );
};

WeddingList.propTypes = {
  weddings: PropTypes.array.isRequired,
  onChangeID: PropTypes.func.isRequired,
  onChangeWeddingDate: PropTypes.func.isRequired
};

export default WeddingList;
