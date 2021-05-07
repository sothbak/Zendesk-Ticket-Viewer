import React, { Component } from 'react';
import List from '../List/List';
// import axios from 'axios';

class Page extends Component {

    state = {
        total_tickets : 0,
        page_tickets : 0,
        ticket_data : null,
        loaded : false,
        current_page : 1,
        total_pages : 0,
    }

    async getTickets(page) {
        let response = await fetch('http://localhost:4001/tickets/' + page);
        await response.json().then(data => {
            console.log(data);
            this.setState({total_tickets : data.count, ticket_data : data.tickets, page_tickets : data.tickets.length, total_pages : Math.ceil(data.count/25), current_page : page, loaded : true});
            // console.log(data.tickets[2].subject);
            // console.log(this.tickets[2]);
        })
    }
    componentDidMount() {
        this.getTickets(this.state.current_page);
    }

    nextPage = () => {
        console.log('hello');
        const current_page = this.state.current_page;
        this.setState({loaded : false}, () => {
            this.getTickets(current_page + 1);
        });
        // this.getTickets(current_page + 1);
    }

    render() {
        let list = null;
        // need key as when key updates, it updates the child component
        this.state.loaded ? list = (<List key={this.state.current_page} ticket_data={this.state.ticket_data}/>) : list = null;
        return (
            <div>
                <button disabled={!this.state.loaded} onClick={this.nextPage}>Next page</button>
                {list}
                <p>{this.state.total_tickets} total ticket(s), this page is showing {this.state.page_tickets} ticket(s)</p>
                <p>currently on page {this.state.current_page} of {this.state.total_pages}</p>
                <button disabled={!this.state.loaded} onClick={this.nextPage}>Next page</button>
            </div>
        )
    }
}

export default Page;