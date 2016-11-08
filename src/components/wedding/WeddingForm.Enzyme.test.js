import React from 'react';
import expect from 'expect';
import {mount, shallow} from 'enzyme';
import WeddingForm from './WeddingForm';

function setup(saving) {
  let props = {
    wedding: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<WeddingForm {...props} />);
}

describe('WeddingForm via Enzyme', () => {
  it('renders form and h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Manage Wedding');
  });

  it('save button is labeled "Save" when not saving', () => {
    const wrapper = setup(false);
      expect(wrapper.find('input').props().value).toBe('Save');
  });

  it('save button is labeled "Saving" when saving', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Saving...');
  });
});
