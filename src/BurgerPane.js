import React, { Component } from 'react';
import Ingredients from './Ingredients';
import BurgerStack from './BurgerStack';

function BurgerPane(props) {
    return (
        <div className="burgerPane">
            <h3>Make your own burger!</h3>
            <BurgerStack ingredients={props.ingredients} />
        </div>
    )
}

// class BurgerPane extends Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div className="burgerPane">
//                 <h3>Make your own burger!</h3>
//                 <BurgerStack ingredients={this.props.ingredients} />
//             </div>
//         )
//     }
// }

export default BurgerPane;