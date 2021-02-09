import React, { Component } from 'react';
import Ingredients from './Ingredients';


function IngredientList() {
    return (
        <div className="panes">
            <h3>Ingredients</h3>
            <ul className="ingredient-list">
            <Ingredients />
            </ul>
        </div>
    )
}

// class IngredientList extends Component {
//     render() {
//         return (
//             <div className="panes">
//                 <h3>Ingredients</h3>
//                 <ul className="ingredient-list">
//                 <Ingredients />
//                 </ul>
//             </div>
//         )
//     }
// }

export default IngredientList;