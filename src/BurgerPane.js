import React, { Component } from 'react';
import Ingredients from './Ingredients';
import BurgerStack from './BurgerStack';

class BurgerPane extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="burgerPane">
                <BurgerStack ingredients={this.props.ingredients} />
                <h1>Burger Pane</h1>
            </div>
        )
    }
}

export default BurgerPane;