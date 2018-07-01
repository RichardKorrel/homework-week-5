// src/components/PizzaBaseContainer.js

import React from 'react'
import { connect } from 'react-redux'
// Import the action creator setPizzaBase
import { setPizzaBase } from '../actions/pizza'
import PizzaElement from './PizzaElement'

// Define the pizza base options
export const pizzaBases = [
  {
    id: 1,
    style: '25cm NY Style',
    price: 8.99
  },
  {
    id: 2,
    style: '30cm NY Style',
    price: 11.49
  },
  {
    id: 3,
    style: '35cm NY Style',
    price: 13.49
  },
  {
    id: 4,
    style: '20cm NY Style',
    price: 6.49
  },
]

class PizzaBaseContainer extends React.PureComponent {

  // Get the option for the pizza base
  getOption = (pizzaBase) => {
      return <option key={pizzaBase.id} value={pizzaBase.style}>{pizzaBase.style} (&euro; {pizzaBase.price}) </option>
  }

  render() {
    // Pass on the required info to the display component PizzaElement
    return <PizzaElement
     pizzaElements={pizzaBases}
     getOption={this.getOption}
     setOption={this.props.setPizzaBase}
     selectText='pick your pizza base'
    />
  }
}

// Bind the action creator setPizzaBase
// so we can use it as props in the PizzaBase component
export default connect(null, { setPizzaBase }) (PizzaBaseContainer)
