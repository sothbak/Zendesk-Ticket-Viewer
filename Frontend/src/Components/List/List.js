import React, { Component } from 'react';
import Ticket from '../Ticket/Ticket';
// import axios from 'axios';

// array of Tickets
class List extends Component {
    state = {
        ticket_data : this.props.ticket_data,
    }

    // getListTickets = (Ticket) => {
        
    // }

    render() {
        let list_tickets = this.state.ticket_data.map(ticket => {
            return ( 
                <Ticket 
                    created_at={ticket.created_at}
                    description={ticket.description}
                    key={ticket.id}
                    priority={ticket.priority}
                    status={ticket.status}
                    subject={ticket.subject}
                    type={ticket.type} /> )
        })

        return (
            <div>
                <p>gday</p>
                {list_tickets}
            </div>
        )
    }
}

export default List;