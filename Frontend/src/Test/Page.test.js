import React from 'react';
import { shallow } from 'enzyme';
import Page from '../Containers/Page/Page.js';
import data from './page1Data';
describe('Page', () => {
  it('should render correctly', () => {
    const page = shallow(<Page />);
    expect(page).toMatchSnapshot();
  });

  it('should render correctly with list of ticket data', () => {
    const page = shallow(<Page />);
    page.setState({ticket_data : data});
    expect(page).toMatchSnapshot();
  });

  it('should render error message', () => {
    const page = shallow(<Page />);
    page.setState({connectedToServer : false});
    expect(page.text()).toContain("Sorry, couldn't connect to the server!");
  });

});