import React, { Component } from 'react';
import axios from 'axios';

import List from '../../Components/List/List';
import DisplayTicket from '../../Components/DisplayTicket/DisplayTicket';
import Paginate from '../../Components/Paginate/Paginate';

import styles from './Page.module.css';

class Page extends Component {

    state = {
        total_tickets : 0,
        page_tickets : 0,
        ticket_data : null,
        loaded : false,
        current_page : 0,
        total_pages : 0,
        showDisplayTicket : false,
        displayTicketData : null,
        connectedToServer : true,
        errorCode : null,
    }

    getTickets = async (page) => {
        axios.get('http://localhost:4001/tickets/' + page)
        .then(response => {
            const data = response.data;
            this.setState({total_tickets : data.count, ticket_data : data.tickets, page_tickets : data.tickets.length, total_pages : Math.ceil(data.count/25), current_page : page, loaded : true});
            console.log(data)
        })
        .catch(error => {
            if (error.message === "Network Error") {
                console.log("Network error, server unavailable");
                this.setState({connectedToServer : false});
            }
            else {
                console.log("Couldn't connect to the server");
                console.log(error.response.status + " error");
                this.setState({errorCode : error.response.status});
            }
        })
    }

    componentDidMount() {
        this.getTickets(this.state.current_page);
    }

    changePage = (page) => {
        this.setState({loaded : false}, () => {
            this.getTickets(page);
        });
    }

    clickDisplayTicket = (id, subject, created_at, description) => {
        const displayTicket = {id : id, subject : subject, created_at : created_at, description : description};
        this.setState({showDisplayTicket : true, displayTicketData : displayTicket});
    }

    closeDisplayTicket = () => {
        this.setState({showDisplayTicket : false, displayTicketData : null});
    }

    render() {
        let serverErrorMessage = null;
        let errorMessage = null;
        let list = null;

        // Error handling messages displaying authentication error or the error code
        if (this.state.errorCode) errorMessage = <h3>Sorry, {this.state.errorCode} error!</h3>;
        if (this.state.errorCode === 401) errorMessage = <h3>Sorry, authentication error!</h3>;

        // Error message if server can't connect (network error)
        this.state.connectedToServer ? serverErrorMessage = null : serverErrorMessage = <h3>Sorry, couldn't connect to the server! Try refreshing!</h3>;
        
        // only display the list if it has been loaded
        this.state.loaded ? list = (<List key={this.state.current_page} ticket_data={this.state.ticket_data} clickDisplayTicket={this.clickDisplayTicket} />) : list = null;
        
        // only display a ticket if it has been clicked on
        let displayTicket= null;
        this.state.showDisplayTicket ? displayTicket = (<DisplayTicket data={this.state.displayTicketData} closeDisplayTicket={this.closeDisplayTicket} />) : displayTicket = null;

        // only display the pagination if the server is connected
        let paginate = (<Paginate 
                            total_tickets={this.state.total_tickets}
                            page_tickets={this.state.page_tickets}
                            current_page={this.state.current_page}
                            total_pages={this.state.total_pages}
                            changePage={this.changePage} />);
        if (!this.state.connectedToServer) paginate = null;

        return (
            <div>
                <div className={styles.list}>
                    <br/>
                    <h1 className={styles.header}>Zendesk Ticket Viewer</h1>
                    {errorMessage}
                    {serverErrorMessage}           
                    {list}
                    {paginate}
                </div>
                <div className={styles.ticketDisplay}>
                    {displayTicket}
                </div>
            </div>
        )
    }
}

export default Page;