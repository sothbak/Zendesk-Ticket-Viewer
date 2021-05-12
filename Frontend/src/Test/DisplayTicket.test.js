import React from 'react';
import { shallow } from 'enzyme';
import DisplayTicket from '../Components/DisplayTicket/DisplayTicket.js';
describe('DisplayTicket', () => {
  it('should render correctly', () => {
    const props = {subject : "subject", id : "id", description : "description"};
    const wrapper = shallow(<DisplayTicket data={props}/>);
    expect(wrapper).toMatchSnapshot();
  });

});