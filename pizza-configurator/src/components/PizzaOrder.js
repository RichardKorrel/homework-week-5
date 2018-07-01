// src/components/PizzaOrder.js

import React from 'react'

export default class PizzaOrder extends React.PureComponent {

  // Show the pizza selection
  showPizzaSelection = (selection) => {
    if (Array.isArray(selection))
      if (!selection[0])
        return 'please select above'
      else
        return null
    if (!selection)
      return 'please select above'
    return selection
  }

  render() {
    return (
      // Show the order details
      <div>
        <h2>Below are your pizza order details</h2>
        <p>Pizza base: {this.showPizzaSelection(this.props.pizzaBase)}</p>
        <p>Pizza sauce: {this.showPizzaSelection(this.props.pizzaSauce)}</p>
        <p>Pizza toppings (maximum of 3): {this.showPizzaSelection(this.props.pizzaToppings)}</p>
        {this.props.pizzaToppings.map(topping =>
            <li key={topping}> {topping}
              <button onClick={() => this.props.deleteTopping(topping)}>
                Unselect
              </button>
            </li>
          )
        }
        <p>Pizza delivery:      {this.showPizzaSelection(this.props.pizzaDelivery)}</p>
        <p>Total price: &euro; {this.props.calcTotalPrice()}</p>
      </div>
    )
  }
}
