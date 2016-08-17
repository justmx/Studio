import React, {PropTypes} from 'react';

const DatePickerInput2 = ({name, label, onChange, value, error}) => {
  let wrapperClass = 'form-group';
  if(error && error.length > 0){
    wrapperClass +=" " + 'has-error';
  }

  return (
    <div className={wrapperClass}>
        <label htmlFor={name}>{label}</label>
        <div className="date input-group">
          <input
            type="text"
            name={name}
            className="datepicker form-control"
            placeholder="Click to select a date"
            value={value}
            onChange={onChange}/>
          {error && <div className="alert alert-danger">{error}</div>}
         </div>
   </div>
  );
};

DatePickerInput2.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string
};

export default DatePickerInput2;
