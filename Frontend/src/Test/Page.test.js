import React from 'react';
import { shallow } from 'enzyme';
import Page from '../Containers/Page/Page.js';
describe('Page', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Page />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('should render correctly with list of ticket data', () => {
  //   const page = shallow(<Page />);
  //   page.setState({ticket_data : data});
  // });

});