import React, { Component } from 'react';
import Ticket from '../Ticket/Ticket';
import styles from './List.module.css';

// array of Tickets
class List extends Component {
    render() {
        let list_tickets = this.props.ticket_data.map(ticket => {
            return ( 
                <Ticket 
                    created_at={ticket.created_at}
                    description={ticket.description}
                    key={ticket.id}
                    id={ticket.id}
                    priority={ticket.priority}
                    status={ticket.status}
                    subject={ticket.subject}
                    type={ticket.type}
                    clickDisplayTicket={this.props.clickDisplayTicket} /> )
        });

        return (
            <ul className={styles.list}>
                {list_tickets}
            </ul>
        )
    }
}

export default List;