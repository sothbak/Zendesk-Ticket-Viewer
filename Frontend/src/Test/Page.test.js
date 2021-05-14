import React from 'react';
import { shallow } from 'enzyme';
import Page from '../Containers/Page/Page.js';
import fullPageData from './Data';

describe('Page', () => {
  it('should render correctly with no data', () => {
    const page = shallow(<Page />);
    expect(page).toMatchSnapshot();
  });

  it('should render correctly with list of ticket data', () => {
    const page = shallow(<Page />);
    page.setState({ticket_data : fullPageData.tickets});
    expect(page).toMatchSnapshot();
  });

  it('should render server error message', () => {
    const page = shallow(<Page />);
    page.setState({connectedToServer : false});
    expect(page.text()).toContain("Sorry, couldn't connect to the server! Try refreshing!");
  });

  it('should render authentication error message', () => {
    const page = shallow(<Page />);
    page.setState({errorCode : 401});
    expect(page.text()).toContain("Sorry, authentication error!");
  });

  it('should render 404 error message', () => {
    const page = shallow(<Page />);
    page.setState({errorCode : 404});
    expect(page.text()).toContain("Sorry, 404 error!");
  });
});