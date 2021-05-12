import React, { Component } from 'react';
import './Ticket.css';

class Tickets extends Component {

    handleClick = () => {
        this.props.clickDisplayTicket(this.props.id, this.props.subject, this.props.status, this.props.description);
    }
    handleClick = this.handleClick.bind(this);

    render() {
        return (
            <li onClick={this.handleClick}>
                <h1>{this.props.subject}</h1>
                <p>{this.props.created_at}</p>
            </li>
        )
    }
}

export default Tickets;