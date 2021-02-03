import React, { Component } from 'react';
import './App.css';
import Ingredients from './Ingredients';
import IngredientList from './IngredientList';
import BurgerPane from './BurgerPane';
import ClearBurger from './ClearBurger';


class App extends Component {
  constructor(props) {
    super()

    this.state = {
      ingredientArray: [],
      newIngredient: '',
      userBurger: []
    }
  }

  addIngredient = (e) => {
    e.preventDefault()

    let tempIngredient = this.state.ingredientArray
    tempIngredient.push(this.state.newIngredient)

    this.setState({
      ingredientArray: tempIngredient,
      newIngredient: ''
    })
  }

  updateIngredient = (e) => {
    this.setState({newIngredient: e.target.value})
  }

  clearBurger = (e) => {
    e.preventDefault()
    console.log('clear?')

    this.setState({
      ingredientArray: []
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Ingredients</h1>
          <IngredientList />
        <div className="appBurgerPane">
          <BurgerPane userBurger={this.state.userBurger} />
        </div>
        <button className="addBtn" type="submit" onClick={(e) => this.addIngredient(e)}>Add Ingredient</button>
        <div className="appClear">
          <ClearBurger clearBurger={this.clearBurger} />
        </div>
      </div>
    )
  }
}

export default App;


