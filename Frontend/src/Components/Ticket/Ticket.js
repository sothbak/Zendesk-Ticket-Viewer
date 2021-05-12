import React, { Component } from 'react';
import styles from './Ticket.module.css';
// import './Ticket.css';

class Tickets extends Component {

    handleClick = () => {
        this.props.clickDisplayTicket(this.props.id, this.props.subject, this.props.status, this.props.description);
    }
    handleClick = this.handleClick.bind(this);

    render() {
        let date = new Date(this.props.created_at);
        date = date.getDate() + '/' + date.getMonth()+1 + '/' + date.getFullYear();
        // date = date.toLocaleDateString("en-US");

        return (
            <li className={styles.ticket} onClick={this.handleClick}>
                <h2>{this.props.subject}</h2>
                <p>{date}</p>
            </li>
        )
    }
}

export default Tickets;