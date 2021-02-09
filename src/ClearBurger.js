import React, { Component } from 'react';

function ClearBurger(props) {

    return (
        <button className="clearBtn" onClick={(e) => props.clearBurger(e)}>Clear Burger</button>
    )
}

// class ClearBurger extends Component {
//     render() {
//         return (
//             <div>
//                 <button className="clearBtn" onClick={(e) => this.props.clearBurger(e)}>Clear Burger</button>
//             </div>
//         )
//     }
// }

export default ClearBurger;