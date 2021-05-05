import React, { Component } from 'react';
// import axios from 'axios';

class Tickets extends Component {
    state = {
        time: null,
        details: null
    }

    async getTickets() {
        let response = await fetch('http://localhost:4001/tickets');
        await response.json().then(data => {
            console.log(data);
        })
    }
    componentDidMount() {
        this.getTickets();
    }

    render() {
        return (
            <div>
                <p>gday</p>
            </div>
        )
    }
}

export default Tickets;