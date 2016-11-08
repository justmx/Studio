import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import {ManageWeddingPage} from '../components/wedding/ManageWeddingPage';
let moment = require('moment');

describe('Manage Wedding Page', () => {
  it('sets error message when trying to save empth title', () => {
    //const wrapper = mount(<Provider store={store}><ManageCoursePage /></Provider>);
    const props = {
      radioOptions: [],
      actions: { saveBasicWeddingInfo: () => { return Promise.resolve(); }},
      weddingDate: moment(),
      wedding : {
        id: "",
        packageType: '',
        groomName: "",
        brideName: "",
        weddingDate: "",
        length: "",
        serviceType: ""
      }
    };
    const wrapper = mount(<ManageWeddingPage {...props}/>);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');
    expect(wrapper.state().errors.groomName).toBe("Groom's Name must be entered.");
  });
});
