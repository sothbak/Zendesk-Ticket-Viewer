import React, { Component } from 'react';
// import axios from 'axios';

class Tickets extends Component {
    state = {
        time: null,
        details: null
    }

    render() {
        return (
            <div>
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