import React, { Component } from 'react';
import styles from './Ticket.module.css';
// import './Ticket.css';

class Tickets extends Component {

    handleClick = () => {
        this.props.clickDisplayTicket(this.props.id, this.props.subject, this.props.created_at, this.props.description);
    }
    handleClick = this.handleClick.bind(this);

    render() {
        let date = new Date(this.props.created_at);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        date = day + '/' + month + '/' + year;

        return (
            <li className={styles.ticket} onClick={this.handleClick}>
                <h2>{this.props.subject}</h2>
                <p>{date}</p>
            </li>
        )
    }
}

export default Tickets;