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
                <p>{this.props.subject}</p>
            </div>
        )
    }
}

export default Tickets;