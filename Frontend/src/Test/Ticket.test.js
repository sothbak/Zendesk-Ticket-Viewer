import React from 'react';
import { shallow } from 'enzyme';
import Ticket from '../Components/Ticket/Ticket.js';

describe('Ticket', () => {
  it('should render correctly', () => {
    const ticket = shallow(<Ticket />);
    expect(ticket).toMatchSnapshot();
  });
});