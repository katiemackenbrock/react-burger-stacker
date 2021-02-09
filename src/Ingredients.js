import React, { Component } from 'react';

const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Tide Pod', color: '#3336FF'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
]

const allIngredients = ingredients.map((ingredient, index) => {
    return (
        <div>
            <p key={index}>{ingredient.name}</p>
        </div>
    )
})
console.log(allIngredients);

function Ingredients() {
    return (
        <div>
            <p>Ingredient</p>
            {allIngredients}
        </div>
    )
}

// class Ingredients extends Component {
//     render() {
//         return (
//             <div>
//                 <p>Ingredient</p>
//                 {allIngredients}
//             </div>
//         )
//     }
// }

export default Ingredients;