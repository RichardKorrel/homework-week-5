// src/components/PizzaOrderContainer.js

import React from 'react'
import { connect } from 'react-redux'
import { pizzaBases } from './PizzaBaseContainer'
import { pizzaSauces } from './PizzaSauceContainer'
import { pizzaToppings } from './PizzaToppingContainer'
import { pizzaDeliveries } from './PizzaDeliveryContainer'
import { removePizzaTopping } from '../actions/pizza'
import PizzaOrder from './PizzaOrder'

class PizzaOrderContainer extends React.PureComponent {

  // Calculate the price for the chosen pizza base
  calcBasePrice = () => {
    if (this.props.base=== null)
      return null
    else {
      return pizzaBases.filter(base => {
        if (base.style === this.props.base) {
          return base
        }
      })[0].price

    }
  }

  // Calculate the price for the chosen pizza sauce
  calcSaucePrice = () => {
    if (this.props.sauce=== null)
      return null
    else {
      return pizzaSauces.filter(sauce => {
        if (sauce.name === this.props.sauce) {
          return sauce
        }
      })[0].price
    }
  }

  // Calculate the price for the chosen pizza toppings
  calcToppingsPrice = () => {
    if (this.props.toppings === null)
      return null
    else {
      return pizzaToppings.filter(topping => {
        if (this.props.toppings.includes (topping.name))
          return topping}).reduce(
        (acc,currentValue) => acc + currentValue.price
        ,0)
    }
  }

  // Calculate the price for the chosen pizza delivery
  calcDelivery = (totalPriceWithoutDeliveryCosts) => {
    if (this.props.delivery=== null)
      return totalPriceWithoutDeliveryCosts
    else {
      return ((pizzaDeliveries.filter(delivery => {
        if (delivery.name === this.props.delivery) {
          return delivery
        }
      })[0].percentage)/100 + 1) * totalPriceWithoutDeliveryCosts
    }
  }

  // Calculate the price for the chosen pizza configuration
  calcTotalPrice = () => {
    return Math.round(this.calcDelivery(this.calcBasePrice() + this.calcSaucePrice() + this.calcToppingsPrice()) * 100) / 100
  }

  // Remove the pizza topping that was unselected
  deleteTopping = (topping) => {
    this.props.removePizzaTopping(topping)
  }

  render() {
    // Pass on the required info to the display component PizzaOrder
    return <PizzaOrder
     pizzaBase={this.props.base}
     pizzaSauce={this.props.sauce}
     pizzaToppings={this.props.toppings}
     pizzaDelivery={this.props.delivery}
     deleteTopping={this.deleteTopping}
     calcTotalPrice={this.calcTotalPrice}
    />
  }
}

const mapStateToProps = (state) => {
  // Map the store state pizza elements to local props
  return {
    base: state.pizza.base,
    sauce: state.pizza.sauce,
    toppings: state.pizza.toppings,
    delivery: state.pizza.delivery
  }
}

export default connect(mapStateToProps, { removePizzaTopping }) (PizzaOrderContainer)
