import React, { Component } from 'react';
import Ingredients from './Ingredients';

function BurgerStack(props) {
    return (
        <>
            <h5>Your burger here</h5>
            <ul className="burger">
            </ul>
            {props.ingredients}
        </>
    )
}

// class BurgerStack extends Component {
//     render() {
//         return (
//             <>
//                 <h5>Your burger here</h5>
//                 <ul className="burger">
//                 </ul>
//                 {this.props.ingredients}
//             </>
//         )
//     }
// }

export default BurgerStack;