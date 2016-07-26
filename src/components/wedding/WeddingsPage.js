// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as weddingActions from '../../actions/weddingActions';
import {bindActionCreators} from 'redux';
import WeddingList from './WeddingList';
import {browserHistory} from 'react-router';

class WeddingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirecToAddWeddingPage=this.redirecToAddWeddingPage.bind(this);
  }



redirecToAddWeddingPage(){
  browserHistory.push('/wedding');
}

  render () {
    const {weddings} = this.props;
    return (
      <div>
        <h1>Weddings</h1>
        <input type="submit"
               value="Add Wedding"
               className="btn btn-primary"
               onClick={this.redirecToAddWeddingPage}/>
        <WeddingList weddings={weddings}/>
      </div>
    );
  }
}

WeddingPage.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  weddings: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  //debugger;
  return {
    weddings: state.weddings    // refence to reducers/index.js and setup this.props.courses which can be used upstair
  };
}

//Approch 1:  , mapDispatchToProps if missing connect will inject a this.props.dispatch function
function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course));  Approch 2
    actions: bindActionCreators(weddingActions, dispatch) //Approch 3
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeddingPage);
