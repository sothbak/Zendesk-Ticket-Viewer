import React from 'react';
import { shallow } from 'enzyme';
import Ticket from '../Components/Ticket/Ticket.js';

describe('Ticket', () => {
  it('should render correctly', () => {
    const ticket = shallow(<Ticket 
                              created_at="2021-05-04T01:07:29Z"
                              description="description"
                              key="1"
                              id="1"
                              subject="subject"/>);
    expect(ticket).toMatchSnapshot();
  });
});