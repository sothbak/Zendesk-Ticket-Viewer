import React, { Component } from 'react';

import styles from './Paginate.module.css';

class Paginate extends Component {
    handleChangePage = (page) => {
        this.props.changePage(page);
    }
    handleChangePage = this.handleChangePage.bind(this);

    render() {
        let numPages = [...Array(this.props.total_pages).keys()];

        // if there are no pages, don't render anything
        let paginateButtons = numPages.length === 0 ? null : numPages.map(number => {
            return (
                <button key={number + 1} className={styles.button} onClick={() => this.handleChangePage(number + 1)} disabled={this.props.current_page === number + 1}>{number + 1}</button>
            )
        });
        let information = numPages.length === 0 ? null : (
            <div>
                <p>{this.props.total_tickets} total ticket(s), this page is showing {this.props.page_tickets} ticket(s) </p>
                <p>Currently on page {this.props.current_page} of {this.props.total_pages} </p>
            </div>
        );

        return (
            <div>
                {information}
                {paginateButtons}
            </div>
        )
    }
}

export default Paginate;