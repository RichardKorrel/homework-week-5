// src/components/PizzaSauceContainer.js

import React from 'react'
import { connect } from 'react-redux'
// Import the action creator setPizzaSauce
import { setPizzaSauce } from '../actions/pizza'
import PizzaElement from './PizzaElement'

// Define the pizza sauce options
export const pizzaSauces = [
  {
    id: 1,
    name: 'White sauce',
    price: 0.50
  },
  {
    id: 2,
    name: 'Red sauce',
    price: 0.50
  },
  {
    id: 3,
    name: 'Double red sauce',
    price: 1.00
  },
  {
    id: 4,
    name: 'Mix it up',
    price: 1.50
  },
]

class PizzaSauceContainer extends React.PureComponent {

  // Get the option for the pizza sauce
  getOption = (pizzaSauce) => {
      return <option key={pizzaSauce.id} value={pizzaSauce.name}>{pizzaSauce.name} (&euro; {pizzaSauce.price}) </option>
  }

  render() {
    // Pass on the required info to the display component PizzaElement
    return <PizzaElement
     pizzaElements={pizzaSauces}
     getOption={this.getOption}
     setOption={this.props.setPizzaSauce}
     selectText='pick your pizza sauce'
    />
  }
}

// Bind the action creator setPizzaSauce
// so we can use it as props in the PizzaSauceContainer component
export default connect(null, { setPizzaSauce }) (PizzaSauceContainer)
