import React, { Component } from 'react';

class DisplayTicket extends Component {
    handleClick = () => {
        this.props.closeDisplayTicket();
    }
    handleClick = this.handleClick.bind(this);

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Close</button>
                <h1>{this.props.data.subject}</h1>
                <h3>ID : {this.props.data.id}</h3>
                <p>{this.props.data.description}</p>
            </div>
        )
    }
}

export default DisplayTicket;