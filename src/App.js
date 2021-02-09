import React, { useState, Component } from 'react';
import './App.css';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import ClearBurger from './ClearBurger';


function App() {
  const [userBurger, setUserBurger] = useState([])
  const [ingredientArray, setIngredientArray] = useState([])
  const [newIngredient, setNewIngredient] = useState('')


  const addIngredient = (ingredient) => {
    // e.preventDefault()
    setUserBurger(userBurger.concat(ingredient))

    // setUserBurger([...userBurger, ingredient])
    // setNewIngredient([...newIngredient, ingredientArray])
    // let tempIngredient = ingredientArray
    // tempIngredient.push(newIngredient)
    // setIngredientArray(tempIngredient)
    // setNewIngredient('')
  }

  const updateIngredient = (e) => {
    setNewIngredient(e.target.value)
  }

  const clearBurger = (e) => {
    e.preventDefault()
    console.log('clear?')

    setIngredientArray([])
  }

  return (
    <div className="mainDiv">
        <div>
          <h1>Burger Stacker</h1>
        </div>
        <div className="pane">
          <IngredientList addIngredient={addIngredient}/>
        <div className="appBurgerPane">
          {/* remove this.state */}
          <BurgerPane userBurger={userBurger} />
        </div>
        </div>
        {/* <button className="addBtn" type="submit" onClick={(e) => addIngredient(e)}>Add Ingredient</button> */}
        <div className="appClear">
          <ClearBurger clearBurger={clearBurger} />
        </div>
      </div>
  )
}

// class App extends Component {
//   constructor(props) {
//     super()

//     this.state = {
//       ingredientArray: [],
//       newIngredient: '',
//       userBurger: []
//     }
//   }

//   addIngredient = (e) => {
//     e.preventDefault()

//     let tempIngredient = this.state.ingredientArray
//     tempIngredient.push(this.state.newIngredient)

//     this.setState({
//       ingredientArray: tempIngredient,
//       newIngredient: ''
//     })
//   }

//   updateIngredient = (e) => {
//     this.setState({newIngredient: e.target.value})
//   }

//   clearBurger = (e) => {
//     e.preventDefault()
//     console.log('clear?')

//     this.setState({
//       ingredientArray: []
//     })
//   }

//   render() {
//     return (
//       <div className="mainDiv">
//         <div>
//           <h1>Burger Stacker</h1>
//         </div>
//         <div className="pane">
//           <IngredientList />
//         <div className="appBurgerPane">
//           <BurgerPane userBurger={this.state.userBurger} />
//         </div>
//         </div>
//         <button className="addBtn" type="submit" onClick={(e) => this.addIngredient(e)}>Add Ingredient</button>
//         <div className="appClear">
//           <ClearBurger clearBurger={this.clearBurger} />
//         </div>
//       </div>
//     )
//   }
// }

export default App;


