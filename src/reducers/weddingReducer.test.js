import expect from 'expect';
import weddingReducer from './weddingReducer';
import * as actions from '../actions/weddingActions';


describe('Wedding Reducer', () => {
  it('should add wedding when passed CREATE_WEDDING_SUCCESS', () => {
    // arrange
    const initialState = [
      {
        id: "01008"
      },
      {
        id: "01009"
      }
    ];

    const newWedding = {
      id: "01010"
    }  ;
    const action = actions.createWeddingSuccess(newWedding);

    //act
    const newState = weddingReducer(initialState, action);

    //assert
    expect(newState.length).toEqual(3);
    expect(newState[0].id).toEqual('01008');
    expect(newState[1].id).toEqual('01009');
    expect(newState[2].id).toEqual('01010');
  });

  it('should update wedding when passed UPDATE_WEDDING_SUCCESS', () => {
    // arrange
    const initialState = [
      {
        id: "01008",
        packageType: 'Full Day'
      },
      {
        id: "01009",
        packageType: '10hrs'
      },
      {
        id: "01010",
        packageType: '12hrs'
      }
    ];

    const wedding = {
      id: "01009",
      packageType: 'Full Day'
    };
    const action = actions.updateWeddingSuccess(wedding);

    //act
    const newState = weddingReducer(initialState, action);
    const updateWedding = newState.find(a => a.id == wedding.id);
    const untouchedWedding = newState.find(a => a.id == '01010');

    //assert
    expect(updateWedding.packageType).toEqual('Full Day');
    expect(untouchedWedding.packageType).toEqual('12hrs');
    expect(newState.length).toEqual(3);
  });
});
