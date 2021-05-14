import React, { Component } from 'react';
import styles from './DisplayTicket.module.css';

class DisplayTicket extends Component {
    handleClick = () => {
        this.props.closeDisplayTicket();
    }
    handleClick = this.handleClick.bind(this);

    render() {
        let date = new Date(this.props.data.created_at);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        date = day + '/' + month + '/' + year;

        return (
            <div>
                <button onClick={this.handleClick}>Close</button>
                <h1>{this.props.data.subject}</h1>
                <h3>ID : {this.props.data.id}</h3>
                <h3>Created at : {date}</h3>
                <p className={styles.description}>{this.props.data.description}</p>
            </div>
        )
    }
}

export default DisplayTicket;