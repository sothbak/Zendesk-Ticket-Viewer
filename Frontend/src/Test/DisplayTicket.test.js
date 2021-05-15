import React from 'react';
import { shallow } from 'enzyme';
import DisplayTicket from '../Components/DisplayTicket/DisplayTicket.js';

describe('DisplayTicket', () => {
  it('should render correctly', () => {
    const props = {subject : "subject", id : "id", description : "description", created_at : "2021-05-04T01:07:29Z"};
    const displayTicket = shallow(<DisplayTicket data={props}/>);
    expect(displayTicket).toMatchSnapshot();
  });

  it('should contain the correct creation date', () => {
    const props = {subject : "subject", id : "id", description : "description", created_at : "2021-05-04T01:07:29Z"};
    const displayTicket = shallow(<DisplayTicket data={props}/>);
    expect(displayTicket.text()).toContain("4/5/2021");
  });
});