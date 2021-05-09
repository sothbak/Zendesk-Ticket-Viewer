import React, { Component } from 'react';

class Tickets extends Component {
    state = {
        time: null,
        details: null
    }

    handleClick = () => {
        this.props.displayTicket(this.props.id, this.props.subject, this.props.status, this.props.description);
    }
    handleClick = this.handleClick.bind(this);

    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>{this.props.subject}</h1>
                <p>{this.props.created_at}</p>
                {/* <p>{this.props.priority}</p>
                <p>{this.props.status}</p>
                <p>{this.props.type}</p> */}
            </div>
        )
    }
}

export default Tickets;