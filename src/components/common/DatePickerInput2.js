import React, {PropTypes} from 'react';

export class DatePickerInput2 extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: this.props.name,
      error: this.props.error,
      name: this.props.name,
      label: this.props.label,
      onChange: this.props.onChange,
      value: this.props.value
    };
  }

  // componentWillReceiveProps(nextProps){
  //
  // }

  componentDidMount() {
    let dp = $('#'+ this.state.key);
    //console.log('hihi'+ dp.attr('id'));
    dp.datepicker({
      weekStart: 1,
      todayBtn: true,
      todayHighlight: true,
      autoclose: true,
      altFormat: 'dd/mm/yyyy',
      yearRange: '-10:+10'
    });
    }

  render() {
    let wrapperClass = 'form-group';
    if(this.state.error && this.state.error.length > 0){
      wrapperClass +=" " + 'has-error';
    }

    return (
      <div className={wrapperClass}>
          <label htmlFor={this.state.name}>{this.state.label}</label>
            <div className="date input-group">
              <input
                type="text"
                id={this.state.key}
                name={this.state.name}
                className="form-control"
                placeholder="Click to select a date"
                value={this.state.value}
                onChange={this.state.onChange}/>
              {this.state.error && <div className="alert alert-danger">{this.state.error}</div>}
             </div>
     </div>
    );
  }
}

DatePickerInput2.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default DatePickerInput2;
