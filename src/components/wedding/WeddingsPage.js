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
    this.state = {
      weddings: this.props.weddings,
      sort_flag: true,
      sort_flag2: false
    };
    this.redirecToAddWeddingPage=this.redirecToAddWeddingPage.bind(this);
    this.onChangeID=this.onChangeID.bind(this);
    this.onChangeWeddingDate=this.onChangeWeddingDate.bind(this);
  }

  onChangeID(event){
    event.preventDefault();
    let _weddings = this.state.weddings;
    let _sort_flag2 = !this.state.sort_flag2;
    _weddings=_weddings.sort(function(a,b){
      return a.id > b.id;
   });
   if(_sort_flag2){
     _weddings=_weddings.reverse();
   }
   console.log('hihi'+_weddings);
    this.setState({weddings: _weddings,
                  sort_flag2: _sort_flag2});
  }

  onChangeWeddingDate(event){
    event.preventDefault();
    const _sort_flag = !this.state.sort_flag;
    this.props.actions.sortByWeddingDate(_sort_flag);
    this.setState({sort_flag: _sort_flag});
  }

  componentWillReceiveProps(nextProps){
    if (JSON.stringify(this.props.weddings) !== JSON.stringify(nextProps.weddings) ){
        this.setState({weddings: nextProps.weddings});
    }
  }

  redirecToAddWeddingPage(){
    browserHistory.push('/wedding');
  }

  render () {
    return (
      <div>
        <h1>Weddings</h1>
        <input type="submit"
               value="Add Wedding"
               className="btn btn-primary"
               onClick={this.redirecToAddWeddingPage}/>
             <WeddingList weddings={this.state.weddings} onChangeID={this.onChangeID} onChangeWeddingDate={this.onChangeWeddingDate}/>
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
