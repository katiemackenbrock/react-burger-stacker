import React, { Component } from 'react';

class ClearBurger extends Component {
    render() {
        return (
            <div>
                <button className="clearBtn" onClick={(e) => this.props.clearBurger(e)}>Clear Burger</button>
            </div>
        )
    }
}

export default ClearBurger;