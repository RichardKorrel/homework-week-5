// src/components/PizzaToppingsContainer.js

import React from 'react'
import { connect } from 'react-redux'
// Import the action creator addPizzaTopping
import { addPizzaTopping } from '../actions/pizza'
import PizzaElement from './PizzaElement'

// Define the pizza topping options
export const pizzaToppings = [
  {
    id: 1,
    name: 'Pineapple',
    price: 0.50
  },
  {
    id: 2,
    name: 'Corn',
    price: 0.50
  },
  {
    id: 3,
    name: 'Olives (green)',
    price: 0.50
  },
  {
    id: 4,
    name: 'Red onion',
    price: 0.50
  },
  {
    id: 5,
    name: 'Spinach',
    price: 0.50
  },
  {
    id: 6,
    name: 'Cherry tomatoes',
    price: 0.50
  },
  {
    id: 7,
    name: 'Chicken',
    price: 0.50
  },
]

class PizzaToppingsContainer extends React.PureComponent {

  // Get the option for the pizza topping
  getOption = (pizzaTopping) => {
    return <option key={pizzaTopping.id} value={pizzaTopping.name}> {pizzaTopping.name} (&euro; {pizzaTopping.price}) </option>
  }

  render() {
    // Pass on the required info to the display component PizzaElement
    return <PizzaElement
     pizzaElements={pizzaToppings}
     getOption={this.getOption}
     setOption={this.props.addPizzaTopping}
     selectText='pick your pizza toppings'
    />
  }
}

// Bind the action creator addPizzaTopping
// so we can use it as props in the PizzaToppingsContainer component
export default connect(null, { addPizzaTopping }) (PizzaToppingsContainer)
