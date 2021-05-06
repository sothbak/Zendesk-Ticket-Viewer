import React, { Component } from 'react';
import List from '../List/List';
// import axios from 'axios';

class Page extends Component {

    state = {
        total_tickets : 0,
        ticket_data : null,
        loaded : false
    }

    async getTickets(page) {
        let response = await fetch('http://localhost:4001/tickets/');
        await response.json().then(data => {
            console.log(data);
            this.setState({total_tickets : data.count, ticket_data : data.tickets, loaded : true});
            // console.log(data.tickets[2].subject);
            // console.log(this.tickets[2]);
        })
    }
    componentDidMount() {
        this.getTickets();
    }

    render() {
        let list = null;
        this.state.loaded ? list = (<List ticket_data={this.state.ticket_data}/>) : list = null;
        return (
            <div>
                {/* <List tickets={this.state.ticket_data}/> */}
                {list}
            </div>
        )
    }
}

export default Page;