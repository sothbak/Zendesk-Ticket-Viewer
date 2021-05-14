import React from 'react';
import { shallow } from 'enzyme';
import Paginate from '../Components/Paginate/Paginate.js';

describe('Paginate', () => {
  it('should render correctly', () => {
    const paginate = shallow(<Paginate total_tickets={140}
                                        page_tickets={25}
                                        current_page={1}
                                        total_pages={6} />);
    expect(paginate).toMatchSnapshot();
  });

  it('should say currently showing 25 tickets and on page 1 of 6', () => {
    const paginate = shallow(<Paginate total_tickets={140}
                                        page_tickets={25}
                                        current_page={1}
                                        total_pages={6} />);
    expect(paginate.text()).toContain("140 total ticket(s), this page is showing 25 ticket(s) Currently on page 1 of 6");
  });

  it('should say currently showing 15 tickets and on page 6 of 6', () => {
    const paginate = shallow(<Paginate total_tickets={140}
                                        page_tickets={15}
                                        current_page={6}
                                        total_pages={6} />);
    expect(paginate.text()).toContain("140 total ticket(s), this page is showing 15 ticket(s) Currently on page 6 of 6");
  });
});