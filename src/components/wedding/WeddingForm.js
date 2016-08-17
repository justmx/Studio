import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DatePickerInput from '../common/DatePickerInput';
import RadioButtonInput from '../common/RadioButtonInput';

const WeddingForm = ({wedding, onSave, onChange, saving, errors, onDateChange, weddingDate, radioOptions}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <DatePickerInput
        name="weddingDate"
        label="Wedding Date"
        value={weddingDate}
        onChange={onDateChange}
        error={errors.weddginDate}/>

      <TextInput
        name="groomName"
        label="Groom's Name"
        value={wedding.groomName}
        onChange={onChange}
        error={errors.groomName}/>

      <TextInput
          name="brideName"
          label="Bride' s Name"
          value={wedding.brideName}
          onChange={onChange}
          error={errors.groomName}/>

      <TextInput
        name="length"
        label="Length"
        value={wedding.length}
        onChange={onChange}
        error={errors.length}/>

      <RadioButtonInput
          name="serviceType"
          label="Service Type"
          options={radioOptions}
          onChange={onChange}
          error={errors.serviceType}
          selected={wedding.serviceType}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
  </form>
  );
};

WeddingForm.propTypes = {
  wedding: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object,
  onDateChange: PropTypes.func.isRequired,
  weddingDate: PropTypes.object,
  radioOptions: PropTypes.array.isRequired
};

export default WeddingForm;

// <SelectInput
//   name="authorId"
//   label="Author"
//   value={course.authorId}
//   onChange={onChange}
//   defaultOption="Select Author"
//   options={allAuthors}
//   error={errors.authorId}/>

// <TextInput
//   name="weddingDate"
//   label="Wedding Date"
//   value={wedding.weddingDate}
//   onChange={onChange}
//   error={errors.weddingDate}/>

// <DatePickerInput2
//   name="weddingDate"
//   label="Wedding Date"
//   value={wedding.weddingDate}
//   onChange={onChange}
//   error={errors.weddginDate}/>
