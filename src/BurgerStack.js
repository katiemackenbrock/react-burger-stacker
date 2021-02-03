import React, { Component } from 'react';
import Ingredients from './Ingredients';

class BurgerStack extends Component {
    render() {
        return (
            <div>
                {this.props.ingredients}
            </div>
        )
    }
}

export default BurgerStack;