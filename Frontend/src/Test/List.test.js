import React from 'react';
import { shallow } from 'enzyme';
import List from '../Components/List/List.js';
import fullPageData from './Data';

describe('List', () => {
  it('should render correctly', () => {
    const list = shallow(<List ticket_data={fullPageData.tickets} />);
    expect(list).toMatchSnapshot();
  });
});