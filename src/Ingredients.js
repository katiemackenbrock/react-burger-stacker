import React, { Component } from 'react';

const ingredients = [
    {name: 'Kaiser Bun', color: 'saddlebrown'},
    {name: 'Sesame Bun', color: 'sandybrown'},
    {name: 'Gluten Free Bun', color: 'peru'},
    {name: 'Lettuce Wrap', color: 'olivedrab'},
    {name: 'Beef Patty', color: '#3F250B'},
    {name: 'Soy Patty', color: '#3F250B'},
    {name: 'Black Bean Patty', color: '#3F250B'},
    {name: 'Chicken Patty', color: 'burlywood'},
    {name: 'Lettuce', color: 'lawngreen'},
    {name: 'Tomato', color: 'tomato'},
    {name: 'Bacon', color: 'maroon'},
    {name: 'Onion', color: 'lightyellow'}
]


function Ingredients(props) {
    const allIngredients = ingredients.map((ingredient, index) => {
        return (
            <div key={index}>
                <p>{ingredient.name}</p>
                <button onClick={() => props.addIngredient(ingredient)}>add to burger</button>
            </div>
        )
    })

    return (
        <div>
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