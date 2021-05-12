import React from 'react';
import { shallow } from 'enzyme';
import Ticket from '../Components/Ticket/Ticket.js';
describe('Ticket', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Ticket />);
    expect(wrapper).toMatchSnapshot();
  });

});