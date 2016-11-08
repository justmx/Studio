// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as weddingActions from '../../actions/weddingActions';
import {bindActionCreators} from 'redux';
import WeddingForm from './WeddingForm';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
let moment = require('moment');


export class ManageWeddingPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      wedding: Object.assign({}, this.props.wedding),
      errors: {},
      saving: false,
      weddingDate: this.props.weddingDate
    };
    this.updateWeddingState = this.updateWeddingState.bind(this);
    this.saveWedding = this.saveWedding.bind(this);
    this.updateWeddingDateState = this.updateWeddingDateState.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.wedding.id != nextProps.wedding.id){
        this.setState({wedding: Object.assign({}, nextProps.wedding)});
    }
  }

  updateWeddingState(event){
    const field = event.target.name;
    let wedding = this.state.wedding;
    wedding[field] = event.target.value;
    return this.setState({wedding: wedding});
  }

  updateWeddingDateState(mdate){
    const date = mdate.format('YYYY-MM-DD');
    let wedding = this.state.wedding;
    wedding['weddingDate'] = date;
    return this.setState({wedding: wedding,
      weddingDate:mdate
    });
  }

  redirect() {
    this.setState ({saving: false});
    toastr.success('Wedding Saved');
    browserHistory.push('/weddings');
    //this.context.router.push('/courses');
  }

  weddingFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.wedding.groomName.length < 1){
      errors.groomName = "Groom's Name must be entered.";
      formIsValid = false;
    }
    this.setState({errors: errors});
    return formIsValid;
  }

  saveWedding(event){
    event.preventDefault();
    if (!this.weddingFormIsValid()) {
      return;
    }
    this.setState ({saving: true});
    this.props.actions.saveBasicWeddingInfo(this.state.wedding);
    this.redirect();
  }


  render() {
    return (
        <WeddingForm
          wedding={this.state.wedding}
          onChange={this.updateWeddingState}
          onSave={this.saveWedding}
          errors={this.state.errors}
          saving={this.state.saving}
          onDateChange={this.updateWeddingDateState}
          weddingDate={this.state.weddingDate}
          radioOptions={this.props.radioOptions}
        />
    );
  }
}

ManageWeddingPage.propTypes = {
   wedding: PropTypes.object.isRequired,
   actions: PropTypes.object.isRequired,
   weddingDate: PropTypes.object,
   radioOptions: PropTypes.array.isRequired
};

function getWeddingById(weddings, id){
  const wedding = weddings.filter(wedding => wedding.id == id);
  if (wedding.length){
    return wedding[0];
  }
  return null;
}


function mapStateToProps(state, ownProps) {
  const weddingId = ownProps.params.id;
  //debugger;
  let wedding = {id: '', groomName: "", brideName: "", weddingDate: "", length: "", serviceType: ""};
  let weddingmDate;
  if(weddingId && state.weddings.length > 0){ // make sure we have the state
    wedding = getWeddingById(state.courses, weddingId);
  }

  if(wedding.weddingDate){
    weddingmDate = moment(wedding.weddingDate);
  }

  let radioOptions=[{value: 'Photo',
  text: 'Photo'},
  {value: 'Video',
  text: 'Video'},
  {value: 'Photo & Video',
  text: 'Both'}];

  return {
    wedding: wedding,
    weddingDate: weddingmDate,
    radioOptions: radioOptions
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(weddingActions, dispatch) //Approch 3
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageWeddingPage);
