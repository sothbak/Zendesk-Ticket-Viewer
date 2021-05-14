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
        authenticationError : true
    }

    getTickets = async (page) => {
        axios.get('http://localhost:4001/tickets/' + page)
        .then(response => {
            const data = response.data;
            this.setState({total_tickets : data.count, ticket_data : data.tickets, page_tickets : data.tickets.length, total_pages : Math.ceil(data.count/25), current_page : page, loaded : true});
        })
        .catch(error => {
            if (error.response.status === 401) {
                console.log("authentication error")
                this.setState({authenticationError : true});
            }
            else {
                console.log("Couldn't connect to the server");
                console.log(error.response)
                this.setState({connectedToServer : false});
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

    clickDisplayTicket = (id, subject, status, description) => {
        const displayTicket = {id : id, subject : subject, status : status, description : description};
        this.setState({showDisplayTicket : true, displayTicketData : displayTicket});
    }

    closeDisplayTicket = () => {
        this.setState({showDisplayTicket : false, displayTicketData : null});
    }

    render() {
        let errorMessage = null;
        let list = null;

        // Error message if get a 401 error
        this.state.authenticationError ? errorMessage = <h3>Sorry, authentication error!</h3> : errorMessage = null;

        // Error message if server can't connect
        this.state.connectedToServer ? errorMessage = null : errorMessage = <h3>Sorry, couldn't connect to the server! Try refreshing!</h3>;
        
        // need key as when key updates, it updates the child component
        this.state.loaded ? list = (<List key={this.state.current_page} ticket_data={this.state.ticket_data} clickDisplayTicket={this.clickDisplayTicket} />) : list = null;
        
        // only display a ticket if it has been clicked on
        let ticketShowing= null;
        this.state.showDisplayTicket ? ticketShowing = (<DisplayTicket data={this.state.displayTicketData} closeDisplayTicket={this.closeDisplayTicket} />) : ticketShowing = null;

        return (
            <div>
                <div className={styles.list}>
                    <br/>
                    <h1 className={styles.header}>Zendesk Ticket Viewer</h1>
                    {errorMessage}               
                    {list}
                    <Paginate 
                        total_tickets={this.state.total_tickets}
                        page_tickets={this.state.page_tickets}
                        current_page={this.state.current_page}
                        total_pages={this.state.total_pages}
                        changePage={this.changePage} />
                </div>
                <div className={styles.ticketDisplay}>
                    {ticketShowing}
                </div>
            </div>
        )
    }
}

export default Page;