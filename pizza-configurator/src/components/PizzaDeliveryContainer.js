// src/components/PizzaDeliveryContainer.js

import React from 'react'
import { connect } from 'react-redux'
// Import the action creator setPizzaDelivery
import { setPizzaDelivery } from '../actions/pizza'
import PizzaElement from './PizzaElement'

// Define the pizza delivery options
export const pizzaDeliveries = [
  {
    id: 1,
    name: 'Normal delivery (no extra costs)',
    percentage: 0.00
  },
  {
    id: 2,
    name: 'Turbo drone delivery (10% added to your order price)',
    percentage: 10.00
  },
]

class PizzaDeliveryContainer extends React.PureComponent {

  // Get the option for the pizza delivery
  getOption = (pizzaDelivery) => {
    return <option key={pizzaDelivery.id} value={pizzaDelivery.name}> {pizzaDelivery.name} </option>
  }

  render() {
    // Pass on the required info to the display component PizzaElement
    return <PizzaElement
     pizzaElements={pizzaDeliveries}
     getOption={this.getOption}
     setOption={this.props.setPizzaDelivery}
     selectText='pick your pizza delivery option'
    />
  }
}

// Bind the action creator setPizzaDelivery
// so we can use it as props in the PizzaDeliveryContainer component
export default connect(null, { setPizzaDelivery }) (PizzaDeliveryContainer)
