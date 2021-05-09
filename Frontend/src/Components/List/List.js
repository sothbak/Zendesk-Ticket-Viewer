import React, { Component } from 'react';
import Ticket from '../Ticket/Ticket';

// array of Tickets
class List extends Component {
    state = {
        ticket_data : this.props.ticket_data,
    }

    // displayTicket = (id) => {

    // }

    render() {
        let list_tickets = this.state.ticket_data.map(ticket => {
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
                    displayTicket={this.props.displayTicket} /> )
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