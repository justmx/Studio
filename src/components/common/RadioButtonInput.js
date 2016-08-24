import React, {PropTypes} from 'react';

const RadioButtonInput = ({name, label, onChange, error, options, selected}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <br/>
        <div className="btn-group">
        {options.map((option, index) => {
          let key=option.value + '_' + index;
          return  <label className="radio-inline">
                    <input type="radio" key={key} id={option.value} value={option.value} name="serviceType" onClick={onChange} />  {option.text}
                  </label>
                })}
         </div>
           {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

RadioButtonInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  selected: PropTypes.string.isRequired
};

export default RadioButtonInput;
