import React from 'react';
import { shallow } from 'enzyme';
import List from '../Components/List/List.js';
describe('Ticket', () => {
  it('should render correctly', () => {
    const props = [{created_at:"created_at", description:"description", id:"id", subject:"subject"}];
    const wrapper = shallow(<List ticket_data={props} />);
    expect(wrapper).toMatchSnapshot();
  });

});