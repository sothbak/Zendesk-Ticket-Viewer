import React, { Component } from 'react';

class DisplayTicket extends Component {
    render() {
        return (
            <div>
                <p>Displaying Ticket {this.props.id}</p>
            </div>
        )
    }
}

export default DisplayTicket;